// In this file you can instantiate your views
// First instantiate your wrapping views, then you can instantiate your trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

* More about the properties and functions of the wrapping views -
 * https://github.com/babe-project/babe-project/blob/master/docs/views.md#wrapping-views-properties

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = babeViews.view_generator("intro",{
    trials: 1,
    name: 'intro',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text:   `This is a sample introduction view.
            <br />
            <br />
            The introduction view welcomes the participant and gives general information
            about the experiment. You can flip a coin for every participant, you are in the <strong>${coin}</strong> group.
            <br />
            <br />
            This mock up experiment is a showcase of the functionality of babe.`,
   buttonText: 'Begin the experiment'    
});

// For most tasks, you need instructions views
const instructions = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instrucions',
    title: 'General Instructions',
    text:  `This is a sample instructions view.
            <br />
            <br />
            First you will go through two practice trials.
            The practice trial view uses babe's 
            <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_fc.png'>forced choice trial view</a>.`,
    buttonText: 'to the practice trial'
});

const instructions_canvas = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instructions_canvas',
    title: 'Generate Shapes',
    text:   `This is another instructions view.
            <br />
            <br />
            Next you will see a sample of a 
            <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_dc.png'>dropdown choice view</a>
            with 3 trials that have pictures of shapes created with 
            <a href='https://github.com/babe-project/babe-project/blob/master/docs/canvas.md'>babe canvas</a>.
            <br />
            <br />`,
    buttonText: 'Start the experiment'
});

const instructions_loop = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instructions_loop',
    title: 'Loop through several views',
    text:   `This is another instructions view.
            <br />
            <br />
            Next you will see a sample of looping through 
            <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_ss.png'>sentence choice</a>
            and <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_ss.png'>image seleciton</a> task twice.
            <br />
            <br />`,
    buttonText: 'Start the loop sample'
});

const instructions_lifecycle = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instructions_lifecycle',
    title: 'Trial Life Cycle',
    text:   `This is another instructions view.
            <br />
            <br />
            All the views so far showed the stimulus (if there was such), the question and expected a response at the moment of creation.
            However, in the background all trial views in babe, go through a life cycle with the following stages:
            <br />
            <br />
            <b>pause</b>
            <br />
            <b>fixation point</b>
            <br />
            <b>stimulus shown</b>
            <br />
            <b>stimulus hidden (or not)</b>
            <br />
            <b>interactions enabled</b>
            <br />
            <br />
            The views that you saw so far also went through these steps using the default life cycle settings and 
            everything in the trial views was shown at once.
            <br />
            <br />
            Next you will see a <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_sr.png'>
            Slider Rating task</a>
            that has a pause of 500 ms, fixation point of 1000 ms and the stimulus appears on the screen for 1500 ms. 
            After the stimulus hides, the response
            form appears and the participant can answer the question.
            <br />
            <br />
            After the rating scale task you will see a 
            <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_ti.png'>Textbox Input task</a>
            that has a pause of 500 ms and a stimulus that hides when 'SPACE' is pressed.`,
    buttonText: 'Start trial life cycle sample'
});

const instructions_hooks = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instructions_hooks',
    title: 'Hooks and Local Functions',
    text:   `This is another instructions view.
            <br />
            <br />
            So far all the trial views called functions that came with the babe package. However, there
            is also an option to use local functions (defined by you) and hook them
            to a trial view.
            <br />
            <br />
            Next you will see a sample of a 
            <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_rc.png'>Rating Scale task</a>
            that uses a locally defined function to tell the participant how long they looked at the stimulus.
            <br />
            <br />
            First, a function is hooked after the stimulus appears to timestamp the time the stimulus appears.
            <br />
            <br />
            Then, a function is hooked after the stimulus hides to record the time when the stimulus disappears, calculate the time spent and
            show the participant the calculation.`,
    buttonText: 'Start hooks sample'
});

// warns the real experiment will begin
const instructions_progress_bar = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instructions_progress_bar',
    title: 'Self-paced reading tasks with a Progress Bar',
    text:   `This is another instructions view.
            <br />
            <br />
            Next you will see two examples of a Self-Paced Reading task
            <br />
            1. <a href='https://github.com/babe-project/babe-project/blob/master/docs/views.md#self-paced-reading-with-forced-choice-response'>
            Self-Paced Reading with Forced Choice response task</a>
            <br />
            2. <a href='https://github.com/babe-project/babe-project/blob/master/docs/views.md#self-paced-reading-task-with-rating-scale-response'>
            Self-Paced Reading with Rating Scale task</a>
            <br />
            <br />
            The trial views have a progress bar in the top right corner of the screen. 
            You can <a href='https://github.com/babe-project/babe-project#progress-bar'>
            use a progress bar</a> in your experiment with a simple configuration.`,
    buttonText: 'Start the SPR tasks'
});

const instructions_experiment = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instructions_experiment',
    title: 'Key Press',
    text:   `This is another instructions view.
            <br />
            <br />
            Next you will see a small 
            <a href='https://github.com/babe-project/babe-project/blob/master/docs/images/views_samples/view_kp.png'>Key Press task</a>
             experiment sample.
            <br />
            <br />
            The experiment will start with practice trials, followed by a view informing the participant when the practice is finished followed by
            another Key Press task functioning as the 'real' main trial.
            <br />
            <br />
            On the screen you will see a square or a circle on a random position (generated with babe's canvas). Your task is to press:
            <br />
            <br />
            <b>F</b> for <b>circle</b>
            <br />
            <b>J</b> for <b>square</b>`,
    buttonText: 'Start the key press task'
});

const begin_real_key_press = babeViews.view_generator("begin",{
    trials: 1,
    name: 'begin_key_press',
    title: 'Begin the real experiment',
    text: 'This was the practice trial for the key press task. Now the real experiment will begin.',
    buttonText: 'Begin'
});

const instructions_customized_views = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instructions_customized_view',
    title: 'Customized views',
    text: `Next you will see an example of a customized view. While _babe has several templates to create views, 
quite soon you will want to have more flexibility to design exactly what you want to have in your experiment. 
For example, _babe defines a DropDown task, but these tasks have only one DropDown Menu. 
So here we define a custom view which has two dropdown menus. The stimulus_container_generator, answer_container_generator and
 handle_response_function functions are defined in a separate file called "02_custom_functions.js". Afterwards, you will
 see two customized forced choice views, that only change the stimulus container or the answer_container.
More information on the creation of customized views can be found <a href="here">here (fix link!)</a>.`
});

const instructions_custom_view = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instructions_custom_view',
    title: 'Custom views',
    text: `Next you will see an example of a "real" custom view. You can define them in "03_custom_views_templates", and
do whatever you want there. The only important thing is that you cann babe.findNextView() eventually and (if you want) 
save the data with babe.trial_data.push(trial_data). Here, you will see a task, where you have to click on buttons until
you click on the correct one.
More information on the creation of custom views can be found <a href="here">here (fix link!)</a>.`
});

const instructions_post_test = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'instructions_post_test',
    title: 'Post Questionnaire',
    text: `Next you will see a sample <a href='/'>Post Test view</a>. 
    The default questions and answer options are in English, however, the whole questionnaire can be translated. In the following Post Test
    sample the questions are in German.`
});

// In the post test questionnaire you can ask your participants addtional questions
const post_test = babeViews.view_generator("post_test",{
    trials: 1,
    name: 'post_test',
    // You can change much of what appears here, e.g., to present it in a different language, as follows:
    title: 'Weitere Angaben',
    text: 'Die Beantwortung der folgenden Fragen ist optional, aber es kann bei der Auswertung hilfreich sein, damit wir Ihre Antworten besser verstehen.',
    buttonText: 'Weiter',
    age_question: 'Alter',
    gender_question: 'Geschlecht',
    gender_male: 'männlich',
    gender_female: 'weiblich',
    gender_other: 'divers',
    edu_question: 'Höchster Bildungsabschluss',
    edu_graduated_high_school: 'Abitur',
    edu_graduated_college: 'Hochschulabschluss',
    edu_higher_degree: 'Universitärer Abschluss',
    languages_question: 'Muttersprache',
    languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
    comments_question: 'Weitere Kommentare'
});

const links = babeViews.view_generator("instructions",{
    trials: 1,
    name: 'links',
    title: 'Further information',
    text: `This was a short presentation of babe's funcionality.
        <br />
        <br />
        This sample's file organisation:
        <br />
        <b>01_custom_styles.css</b> - contains custom styles.
        <br />
        <b>02_custom_functions.js</b> - contains custom functions, variables and hooks (e.g. a global coin flip).
        <br />
        <b>03_custom_views_templates.js</b> - contains user-defined special-purpose view templates.
        <br />
        <b>04_trials.js</b> - contains the data of different trials of a task (e.g., names of pictures, test sentences, questions, etc.).
        <br />
        <b>05_views.js</b> - defines the different kinds of tasks, or, more generally, anything users will engage with on the screen
        <br />
        <b>06_main.js</b> - contains the experiment structure and general information about deployment
        <br />
        The numbering of the files is important, you can use the functions defined 
        in \`01\` in \`04\`, but you can't use some variable from \`05\` in \`02\`
        <br />
        <br />
        Babe's documentation:
        <br />
        <br />
        <a href='https://babe-project.github.io/babe-docs/'>Docs</a>
        <br />
        <a href='https://babe-project.github.io/babe_site/index.html'>Site</a>
        <br />
        <br />
        This sample ran in Debug mode. Next you will see a results table with your answers.`
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = babeViews.view_generator("thanks", {
    trials: 1,
    name: 'thanks',
    title: 'Thank you for taking part in this experiment!',
    prolificConfirmText: 'Press the button'
});

/** trial (babe's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _babe (e.g. for use with a progress bar)
                     and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
        More about trial life cycle - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-lifecycle

    - hook: object - option to hook and add custom functions to the view
        More about hooks - https://github.com/babe-project/babe-project/blob/master/docs/views.md#trial-views-hooks

* All about the properties of trial - https://github.com/babe-project/babe-project/blob/master/docs/views.md#properties-of-trial
*/


// Here, we initialize a normal forced_choice view
const forced_choice_2A = babeViews.view_generator("forced_choice", {
    // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
    trials: part_one_trial_info.forced_choice.length, 
    // name should be identical to the variable name
    name: 'forced_choice_2A',
    data: part_one_trial_info.forced_choice
});


// Here, we initialize a normal keyPress task
const key_press_practice = babeViews.view_generator("key_press",{
    trials: 2,
    name: 'key_press_practice',
    // We can also make use of the trial life cycles, e.g. to introduce a blank screen and a fixation point
    pause: 1000,
    fix_duration: 1500,
    // It is also possible, to define the trial data here, but this quickly gets confusing
    // The trial data is an array and every entry is an object with all necessary information for one trial
    data: [{key1: "f",
           key2: "j",
           f: "circle",
           j: "square",
           expected: "circle",
           // You can make use of our canvas API to create some stimuli
           canvas: {
               focalColor: 'blue',
               focalShape: 'circle',
               focalNumber: 1,
               sort: 'random',
               elemSize: 100,
               total: 1
          }},
       {key1: "f",
           key2: "j",
           f: "circle",
           j: "square",
           expected: "circle",
           canvas: {
               focalColor: 'yellow',
               focalShape: 'square',
               focalNumber: 10,
               sort: 'random',
               elemSize: 30,
               total: 10
          }}]
});

const key_press_main = babeViews.view_generator("key_press",{
    trials: main_trials.keyPress.main.length,
    name: 'key_press_main',
    data: main_trials.keyPress.main,
});

const dropdown_choice = babeViews.view_generator("dropdown_choice",{
    trials: 3,
    name: 'dropdown_choice',
    data: main_trials.dropdownChoice
});

const sentence_choice = babeViews.view_generator("sentence_choice", {
    trials: 2,
    name: 'sentence_choice',
    data: main_trials.sentenceChoice
});

const image_selection = babeViews.view_generator("image_selection",{
    trials: 2,
    name: 'image_selection',
    data: main_trials.imageSelection
});

const textbox_input = babeViews.view_generator("textbox_input",{
    trials: 2,
    name: 'textbox_input',
    data: main_trials.textboxInput,
    pause: 500,
    stim_duration: 'space'
});

// part of the trial flow sample
const slider_rating = babeViews.view_generator("slider_rating",{
    trials: 3,
    name: 'slider_rating',
    data: main_trials.sliderRating,
    pause: 500,
    fix_duration: 1000,
    stim_duration: 1500
});

// part of the hooks and custom events sample
const rating_scale = babeViews.view_generator("rating_scale",{
    trials: 2,
    name: 'rating_scale',
    data: main_trials.ratingScale,
    fix_duration: 500,
    stim_duration: 'space',
    hook: {
        after_stim_shown: myEvents.timeShown,
        after_stim_hidden: myEvents.timeHidden
    }
});

const spr = babeViews.view_generator("self_paced_reading",{
    trials: 4,
    name: 'spr',
    data: main_trials.spr,
    pause: 300,
    fix_duration: 500,
    stim_duration: 1000
});

const spr_rating_scale = babeViews.view_generator("self_paced_reading_rating_scale",{
    trials: 2,
    name: 'spr_rating_scale',
    data: main_trials.spr_rs,
});

// Here we initialize a customized multi dropdown task,

// using a custom view_template, answer_container_element and enable_response function
const multi_dropdown = babeViews.view_generator("forced_choice",
    {trials: part_two_trial_info.multi_dropdown.length,
    title: "Complete the sentence",
    QUD: "Choose one option for each missing word in this sentence.",
    name: 'multi_dropdown',
    // You can also randomize (shuffle) the trials of a view
    data: _.shuffle(part_two_trial_info.multi_dropdown),
    // There is the possibility to add hooks after different events in the trials life cycle
    // after_pause, after_fix_point, after_stim_shown, after_stim_hidden, after_response_enabled
    hook: {after_response_enabled: time_limit}},
    // We add our custom generators here
    {stimulus_container_generator: multi_dropdown_gens.stimulus_container_gen,
    answer_container_generator: multi_dropdown_gens.answer_container_gen,
    handle_response_function: multi_dropdown_gens.handle_response_function}
);

// Here, we initialize a forced_choice view with a custom view template
// We added our custom css style custom-border, to the view template
const forced_choice_custom_view_template = babeViews.view_generator(
    "forced_choice",
    {
        // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
        trials: part_one_trial_info.forced_choice.length,
        // name should be identical to the variable name
        name: 'forced_choice_custom_view_template',
        data: part_one_trial_info.forced_choice
    },
    {
        stimulus_container_generator: function (config, CT) {
            return `<div class='babe-view'>
                    <h1 class='babe-view-title'>${config.title}</h1>
                    <h1 class='babe-view-title custom-border'>Brand new <span style="color:darkred">silly title</span>!</h1>
                    <p class='babe-view-question babe-view-qud'>${config.data[CT].QUD}</p>
                    <div class='babe-view-stimulus-container'>
                        <div class='babe-view-stimulus babe-nodisplay'></div>
                    </div>
                    </div>`;
        }
    }
);

// Here, we initialize a forced_choice view with a custom answer container
// We added an additional title above the question
const forced_choice_custom_answer_container = babeViews.view_generator(
    "forced_choice",
    {
        // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
        trials: part_one_trial_info.forced_choice.length,
        // name should be identical to the variable name
        name: 'forced_choice_custom_answer_container',
        data: part_one_trial_info.forced_choice
    },
    {
        answer_container_generator:  function (config, CT) {
            return `<div class='babe-view-answer-container'>
                    <h1 class='babe-view-title'>Question:</h1>
                    <p class='babe-view-question'>${config.data[CT].question}</p>
                    <label for='o1' class='babe-response-buttons'>${config.data[CT].option1}</label>
                    <input type='radio' name='answer' id='o1' value=${config.data[CT].option1} />
                    <input type='radio' name='answer' id='o2' value=${config.data[CT].option2} />
                    <label for='o2' class='babe-response-buttons'>${config.data[CT].option2}</label>
                    <input type='radio' name='answer' id='o3' value='A new third option!' />
                    <label for='o3' class='babe-response-buttons'>A new third option!</label>
                </div>`;
        }
    }
);

// Here we initialize our full custom views

// First, we will initialize our custom press a button view
const button_click = custom_press_a_button({
    name: "button_click",
    trials: 2
});

// This is a view, were you have to continue until you click on the correct button
const button_until = custom_press_correct_button({
    name: "button_until",
    trials: 3,
    data: [
        {
            target: "first"
        },
        {
           target: "second"
        },
        {
            target: "second"
        }]
});


