(function () {
    $(".tooltip-container").remove();
    $("body").append("<div class='tooltip-container'></div>");
    let elements = [];
    let ids = [];
    $("[data-i18n]:visible").each((index, element) => {
        let offset = $(element).offset();
        let tooltip = $("<div><div>" + $(element).attr("data-i18n") + "</div></div>").css({
            position: "absolute",
            top: offset.top,
            left: offset.left
        });
        elements.push(tooltip);
        ids.push($(element).attr("data-i18n"));
    });
    $(".tooltip-container").append(elements);
    console.log(JSON.stringify($.unique(ids)));
})();