function Bubble() {
    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(divs[j], div_sizes[j], "radial-gradient(yellow,rgb(255, 217, 0))");

            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "radial-gradient(red,rgb(235, 144, 144))");
                div_update(divs[j + 1], div_sizes[j + 1], "radial-gradient(red,rgb(235, 144, 144))");

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "radial-gradient(red,rgb(235, 144, 144))");
                div_update(divs[j + 1], div_sizes[j + 1], "radial-gradient(red,rgb(235, 144, 144))");
            }
            div_update(divs[j], div_sizes[j], "radial-gradient(aqua,blue)")
        }
        div_update(divs[j], div_sizes[j], "radial-gradient(greenyellow,green)");
    }
    div_update(divs[0], div_sizes[0], "radial-gradient(greenyellow,green)");

    enable_buttons();
}