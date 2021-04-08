function Tree(option) {
    var _fontSize = 10;
    var defaultOpt = {
        width: 900,
        height: 900,
        offsetTreeH: 200, //影响树形横向的区域
        nodeHeight: 20, //节点rect高度
        nodeWidth: { //传参为null就按字数设置宽度
            _0: 160,
            _1: 160,
            _2: 130,
            _3: 110,
            _4: 160
        }, //默认节点宽度
        selector: null, //挂载元素
        fontNum: 1.2, //设置字体大小因子
        fontColors: { //字体颜色
            normal: '#fff',
            warning: '#e3e3e1',
            errors: '#f00'
        },
        bgColors: {
            normal: '#000',
            warning: '#e3e3e1',
            errors: '#f00'
        },
        dataUrl: '' //必填
    };

    option = $.extend(true, defaultOpt, option);

    this.width = option.width;
    this.height = option.height;
    this.nodeHeight = option.nodeHeight;
    this.nodeWidth = option.nodeWidth;
    this.offsetTreeH = option.offsetTreeH;
    this.selector = option.selector == null ? "body" : option.selector;
    this.fontNum = option.fontNum;
    this.fontColors = option.fontColors;
    this.bgColors = option.bgColors;
    this.dataUrl = option.dataUrl;
    this._getFontSize = function() {
        return _fontSize;
    }

}

Tree.prototype.init = function() {
    var that = this;
    var tree = d3.layout.tree()
        .size([that.width, that.height - that.offsetTreeH])
        .separation(function(a, b) { //间隔函数
            return (a.parent == b.parent ? 1 : 2) / a.depth;
        });

    var svg = d3.select(that.selector).append("svg")
        .attr("width", that.width)
        .attr("height", that.height)
        .append("g")
        .attr("transform", "translate(0,0)");


    if (Object.prototype.toString.call(that.dataUrl).toLowerCase() == '[object string]') {
        d3.json(that.dataUrl, function(error, root) {
            if (error) throw error;
            render(root);
        });
    } else {
        render(that.dataUrl);
    }

    function render(root) {
        var nodes = tree.nodes(root);
        var links = tree.links(nodes);
        var link = svg.selectAll(".link")
            .data(links)
            .enter()
            .append("path")
            .attr("class", "link")
            .attr("d", function(d) {
                var lineOffsetWidth;

                if (that.nodeWidth == null) { //nodeWidth传参为null则按照字数来自动设置宽度
                    lineOffsetWidth = (d.source.name.length + d.source.number.length + 2) *
                        that._getFontSize() * that.fontNum;
                } else {
                    lineOffsetWidth = that.nodeWidth['_' + d.source.depth];
                }

                lineOffsetWidth = lineOffsetWidth + 10;

                return "M" + d.source.y + " " + d.source.x +
                    "L" + (d.source.y + lineOffsetWidth) + " " + d.source.x +
                    " L" + (d.source.y + lineOffsetWidth) + " " + d.target.x + " L" +
                    d.target.y + " " + d.target.x;
            })
            .attr("style", function() {
                return "stroke:#F7881F;fill: none;stroke-width: 1.5px;"
            });

        var node = svg.selectAll(".node")
            .data(nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .attr("transform", function(d) {
                return "translate(" + d.y + "," + (d.x - that.nodeHeight / 2) + ")";
            })
            .attr("style", function(d) {
                return "font: " + that._getFontSize() * that.fontNum + "px sans-serif;"
            });

        node.append("rect")
            .attr("width", function(d) {
                return that.nodeWidth == null ?
                    (d.name.length + d.number.length + 2) * that._getFontSize() * that.fontNum :
                    that.nodeWidth['_' + d.depth];
            })
            .attr("height", that.nodeHeight)
            .attr("x", 0)
            .attr("y", 0)
            .attr("style", function(d) {
                if (d.type === "1") {
                    return "fill:" + that.bgColors.normal;
                } else if (d.type === "2") {
                    return "fill:" + that.bgColors.warning;
                } else {
                    return "fill:" + that.bgColors.errors;
                }
            });

        node.append("text")
            .attr("dx", function(d) {
                return that._getFontSize() * that.fontNum;
            })
            .attr("dy", (that._getFontSize() * that.fontNum + that.nodeHeight) / 2 - 2)
            .style("text-anchor", function(d) {
                return "start";
            })
            .style("fill", "#fff")
            .text(function(d) { return d.name; });

        node.append("text")
            .attr("dx", function(d) {
                return that.nodeWidth == null ?
                    (d.name.length + 2) * that._getFontSize() * that.fontNum :
                    (that.nodeWidth['_' + d.depth] - 3 * that._getFontSize() * that.fontNum);
            })
            .attr("dy", (that._getFontSize() * that.fontNum + that.nodeHeight) / 2 - 2)
            .style("text-anchor", function(d) {
                return "start";
            })
            .style("fill", "#fff")
            .text(function(d) { return d.number; });

    }
};

var jsonObject = {
    "name": "Official",
    "number": "12",
    "type": "1",
    "children": [{
            "name": "Partment",
            "number": "3",
            "type": "4",
            "children": [{
                    "name": "o",
                    "number": "381",
                    "type": "4",
                },
                {
                    "name": "b",
                    "number": "121",
                    "type": "4"
                }
            ]
        },
        {
            "name": "Others",
            "number": "1",
            "type": "4",
            "children": [{
                    "name": "XX",
                    "number": "183",
                    "type": "4",
                },
                {
                    "name": "XXX",
                    "number": "8",
                    "type": "4"
                }
            ]
        }
    ]
};
var option = {
    dataUrl: jsonObject,
    nodeHeight: 30,
    selector: "#dynamicTree"
};
var tree = new Tree(option);
tree.init();