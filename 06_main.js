// In this file you initialize and configure your experiment using magpieInit

$("document").ready(function() {
    // prevent scrolling when space is pressed
    window.onkeydown = function(e) {
        if (e.keyCode === 32 && e.target === document.body) {
            e.preventDefault();
        }
    };

    // calls magpieInit
    // in debug mode this returns the magpie-object, which you can access in the console of your browser
    // e.g. >> window.magpie_monitor or window.magpie_monitor.findNextView()
    // in all other modes null will be returned
    window.magpie_monitor = magpieInit({
        // You have to specify all views you want to use in this experiment and the order of them
        views_seq: [
            intro,

            instructions,
            forced_choice_2A,

            instructions_canvas,
            dropdown_choice,

            instructions_loop,
            magpieUtils.views.loop([sentence_choice, image_selection], 2),

            instructions_lifecycle,
            slider_rating,
            textbox_input,

            instructions_hooks,
            rating_scale,

            instructions_progress_bar,
            spr,
            spr_rating_scale,

            instructions_experiment,
            key_press_practice,
            begin_real_key_press,
            key_press_main,

            instructions_customized_views,
            multi_dropdown,
            forced_choice_custom_view_template,
            forced_choice_custom_answer_container,

            instructions_custom_view,
            // You can also randomize the order of some views
            _.shuffle([button_click, button_until]),

            instructions_post_test,
            post_test,

            links,
            thanks
        ],
        // Here, you can specify all information for the deployment
        deploy: {
            experimentID: "INSERT_A_NUMBER",
            serverAppURL: "https://magpie-demo.herokuapp.com/api/submit_experiment/",
            // Possible deployment methods are:
            // "debug" and "directLink"
            // As well as "MTurk", "MTurkSandbox" and "Prolific"
            deployMethod: "debug",
            contact_email: "YOUREMAIL@wherelifeisgreat.you",
            prolificURL: "https://app.prolific.ac/submissions/complete?cc=SAMPLE1234"
        },
        // Here, you can specify how the progress bar should look like
        progress_bar: {
            in: [
                // list the view-names of the views for which you want a progress bar
                spr.name,
                spr_rating_scale.name,
                key_press_main.name,
            ],
             // Possible styles are "default", "separate" and "chunks"
            style: "separate",
            width: 100
        },
        // Here, you can activate a timer
        timer: {
            // Defaults:
            // minutes: 10, // How many minutes the timer should run
            // show_info_time: 0.2, // Percentage of time left, after which the user gets informed
            // snack_text: "Still here?", // Text on the information bar
            // show_info_time_time: true, // Also show the remaining time on the bar
            // new_title: "Still here?", // New page title that is flashed
            // end_function: function() {location.reload(true)} // Function that is invoked after timeout (page refresh)
        }
    });
});
