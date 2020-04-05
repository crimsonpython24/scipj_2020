let index_url = "{% url 'index' %}";
let hash_url = "{% url 'hash_detail' slug=algorithm.slug %}";
let algo_slug = "{{ algorithm.slug }}";
let algo_name = "{{ algorithm.name }}";
let algo_subtitle = "{{ algorithm.subtitle }}";
let algo_p1 = "{{ algorithm.paragraph1 }}";
let algo_p2 = "{{ algorithm.paragraph2 }}";
let algo_p3 = "{{ algorithm.paragraph3 }}";
let algo_image = "{{ algorithm.image }}";

function stripArray(string1, array2) {
    let array1 = string1.split(';');
    for (i=0 ; i<array1.length; i++) {
        if (i % 2 == 1) {
            var string = array1[i];
            array2.push(string.substring(0, string.length-4));
        }
    }
}
let algo_steps_header = []; let algo_steps_desc = [];
let algo_steps_header_tmp = "{{ algorithm.stepper_header }}";
let algo_steps_desc_tmp = "{{ stepper_description }}";
stripArray(algo_steps_header_tmp, algo_steps_header);
stripArray(algo_steps_desc_tmp, algo_steps_desc);