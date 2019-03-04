const multiSliderRatings_custom_view_constructor = function(config) {
    const multiSliderRating = {
        name: config.name,
        title: babeUtils.view.setter.title(config.title, ""),
        render: function(CT, babe) {
            let startingTime;
            const question = babeUtils.view.setter.question(
                config.data[CT].question
            );
            const QUD = babeUtils.view.setter.QUD(config.data[CT].QUD);
            const option1 = config.data[CT].optionLeft;
            const option2 = config.data[CT].optionRight;
            const viewTemplate = `<div class='babe-view'>
                <h1 class='babe-view-title'>${this.title}</h1>
                <p class='babe-view-question babe-view-QUD'>${QUD}</p>
                <div class='babe-view-stimulus-container' height='100'>
                    <div class='babe-view-stimulus babe-nodisplay'></div>
                </div>
            </div>`;

            const answerContainerElem = `<p class='babe-view-question'>${question}</p>
            <div class='babe-view-answer-container'>
                <p>
                <span class='babe-response-slider-option'>${option1}</span>
                <input type='range' id='response1' class='babe-response-slider' min='0' max='100' value='50'/>
                <span class='babe-response-slider-option'>${option2}</span>
                </p>
                <p>
                <span class='babe-response-slider-option'>${option1}</span>
                <input type='range' id='response2' class='babe-response-slider' min='0' max='100' value='50'/>
                <span class='babe-response-slider-option'>${option2}</span>
                </p>
            </div>
            <button id="next" class='babe-view-button babe-nodisplay'>Next</button>`;

            $("#main").html(viewTemplate);

            const enableResponse = function() {
                let response1;
                let response2;

                $(".babe-view").append(answerContainerElem);

                response1 = $("#response1");
                response2 = $("#response2");

                // flags to check if sliders have been touched
                var response_flags = [0, 0];

                const display_button_checker = function(slider_number) {
                    response_flags[slider_number] = 1;
                    if (_.min(response_flags) == 1) {
                        $("#next").removeClass("babe-nodisplay");
                    }
                };

                // checks if the slider has been changed
                response1.on("change", function() {
                    display_button_checker(0);
                });
                response1.on("click", function() {
                    display_button_checker(0);
                });
                response2.on("change", function() {
                    display_button_checker(1);
                });
                response2.on("click", function() {
                    display_button_checker(1);
                });

                $("#next").on("click", function() {
                    const RT = Date.now() - startingTime; // measure RT before anything else
                    const trial_data = {
                        trial_type: config.trial_type,
                        trial_number: CT + 1,
                        response1: response1.val(),
                        response2: response2.val(),
                        RT: RT
                    };

                    for (let prop in config.data[CT]) {
                        if (config.data[CT].hasOwnProperty(prop)) {
                            trial_data[prop] = config.data[CT][prop];
                        }
                    }

                    if (config.data[CT].picture !== undefined) {
                        trial_data.picture = config.data[CT].picture;
                    }

                    if (config.data[CT].canvas !== undefined) {
                        for (let prop in config.data[CT].canvas) {
                            if (
                                config.data[CT].canvas.hasOwnProperty(prop)
                            ) {
                                trial_data[prop] =
                                    config.data[CT].canvas[prop];
                            }
                        }
                    }

                    babe.trial_data.push(trial_data);
                    babe.findNextView();
                });
            };

            startingTime = Date.now();

            // creates the DOM of the trial view
            babeUtils.view.createTrialDOM({
                    pause: config.pause,
                    fix_duration: config.fix_duration,
                    stim_duration: config.stim_duration,
                    data: config.data[CT],
                    evts: config.hook,
                    view: "multiSliderRating"
                },
                enableResponse
            );
        },
        CT: 0,
        trials: config.trials
    };

    return multiSliderRating;
};

const multiSliderCustom = multiSliderRatings_custom_view_constructor({
    name: 'multi_slider_ratings',
    trial_type: 'slider_rating_main',
    data: main_trials.sliderRating,
    title: 'Custom view with multiple sliders',
    trials: 2
});
