//object to save application data

const data = {
    skills: ["CSS3", "HTML5"]
}

//object to hold main dom nodes

const $nodes = {

    div: $("div.skills"),
    form: $("form"),
    textBox: $("input[type='submit']")
}

//function that renders skills to the div

const renderSkills = () => {
    for(skill of data.skills){
        const newSkill = $("<div>").addClass("skill") //create newSkill
        $nodes.div.append(newSkill.text(skill))       
    }
}

renderSkills()

//function for adding skills 

const addSkills = (newSkills) => {
    data.skills.push(newSkills);
    renderSkills();
}

//add event to the form

$nodes.form.on("submit", (event) => {

    event.preventDefault();
    addSkills($nodes.form.val()); //get the value inside of an input form and add the value to the skills array 
    $nodes.form.val("")//empty the text box

})