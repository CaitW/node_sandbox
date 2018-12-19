(function (position) {
    $(".tooltip-container").remove();
    $("body").append("<div class='tooltip-container'></div>");
    let elements = [];
    let ids = [];
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    $("[data-i18n]:visible").each((index, element) => {
        let offset = $(element).offset();
        let width = $(element).width();
        let height = $(element).height();
        let left = (position === "left") ? offset.left + width : offset.left;
        let top = (position === "bottom") ? offset.top + height : offset.top;
        let tooltipContainer = $("<div></div>")
            .css({
                position: "absolute",
                top: top,
                left: left
            });
       $("<div class='" + position + "'>" + $(element).attr("data-i18n") + "</div>")
            .attr("data-width", width)
            .attr("data-height", height)
            .appendTo(tooltipContainer);
        elements.push(tooltipContainer);
        ids.push($(element).attr("data-i18n"));
    });
    $(".tooltip-container").append(elements);
    console.log(JSON.stringify(ids.filter(onlyUnique)));
})('top');

$(".caitlin").removeClass("caitlin");