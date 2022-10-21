//IPO - Input Process Output


// Constants and Variables (State)

let skills;


// Cached Element References

const $form = $("form")
const $text = $("input[type=text]")
const $ul = $("ul")
const $li = $("li")
const $h1 = $("h1")
const $span = $("span")

console.log($span)
// Event Listeners

//listen for submit events and add the inputted skill into the skills array
$form.on("submit", handleAddSkill)

//listen for events on the delete button and delete the skill from the list
$ul.on("click", handleDelete)


// Function

//assign an empty array to skills
init();
function init(){
    skills = [];
    render();
}


function handleAddSkill(event){

        event.preventDefault()
        //store the value from the input tag inside a local variable
        let inputValue = $text.val()
        //check to make sure we have skill data
        if(inputValue)
        {

           //create ui for skill 
            let $newLi = $(`<li><span>X</span>${inputValue}</li>`)
            
            //push the skill UI into the skills list
            skills.push($newLi)

            //clear the input tag's value
            $text.val("")

            //render() 
            render()

        }
        else return;
}

function handleDelete(event){

        
    console.log(event)
    const htmlOfSkill = $(event.target).html()
    //remove li from the dom
    event.target.remove()

    //identify the text of the object that was clicked on remove it from the array
    let indexOfcurrentTargetText = skills.indexOf(htmlOfSkill)
    skills.splice(indexOfcurrentTargetText,1)
    console.log(skills)

}


//render skills to the dom

function render(){

    if(skills !== []){$h1.css('margin-bottom', '50px')}
    else {$h1.css('margin-bottom', '0px')}
    //to take the list of skills in the skills array and add them to ul tag

        $ul.html(skills)
        console.log(skills)
    

}








// const data = {
//     skills: ["CSS3", "HTML5"]
// }

// //object to hold main dom nodes

// const $nodes = {

//     div: $("div.skills"),
//     form: $("form"),
//     textBox: $("input[type='submit']")
// }

// //function that renders skills to the div

// const renderSkills = () => {
//     for(skill of data.skills){
//         const newSkill = $("<div>").addClass("skill") //create newSkill
//         $nodes.div.append(newSkill.text(skill))       
//     }
// }

// renderSkills()

// //function for adding skills 

// const addSkills = (newSkills) => {
//     data.skills.push(newSkills);
//     renderSkills();
// }

// //add event to the form

// $nodes.form.on("submit", (event) => {

//     event.preventDefault();
//     addSkills($nodes.form.val()); //get the value inside of an input form and add the value to the skills array 
//     $nodes.form.val("")//empty the text box

// })