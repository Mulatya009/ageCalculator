// global variables
const form = document.getElementById('details'),
      //name = document.getElementById('name'),
      dob = document.getElementById('dob'),
      resetBtn = document.getElementById('reset');


// eventListeners
eventListeners();
function eventListeners(){
    form.addEventListener('submit', userDetails);
    resetBtn.addEventListener('click', reset);
}

// functions
function userDetails(e){
    e.preventDefault();
    if(name.value !== "" && dob.value !== ""){
        let today = new Date();
        let DOB = dob.value;
        //compute difference to gate age in milliseconds;
        let diff = Math.abs(today - new Date(DOB.replace(/-/g,'/')));

        // convert to various needed param
        let years, months, days, leapYearDays;

        let fYears1 = parseFloat(diff / (1000 * 60 * 60 * 24 * 365));
            leapYearDays = (fYears1 / (4 * 365));
            fYears = fYears1 - leapYearDays
            years = Math.floor(fYears);
        let fMonths = 12 * (fYears - years);
            months = Math.floor(fMonths);
        let fDays = parseFloat((365 * (fYears - years)) - (months * 30.5));
            days = Math.floor(fDays);

        //console.log("Dear"  + ' '  + userName + ' ' + "You have" + ' ' + years + ' ' + "years" + ',' + ' ' + months + ' ' + "months" +' ' + "and" + ' ' + days+ ' ' + "days" + '.');
            // creating results
        let yourName = document.createElement('h3');
            yourName.classList.add('text-secondary');
            yourName.classList.add('text-capitalize');
        let yourNameText = document.createTextNode("Dear"  + ' '  + document.getElementById('name').value + ',');    
            yourName.append(yourNameText);
        
        let yourAge = document.createElement('h5');
            yourAge.classList.add('text-white');
            yourAge.classList.add('response');
        let yourAgeText = document.createTextNode( "You have" + ' ' + years + ' ' + "years" + ',' + ' ' + months + ' ' + "months" +' ' + "and" + ' ' + days+ ' ' + "days" + '.');    
            yourAge.append(yourAgeText);

            // rendering results
        let renderName = document.getElementById('yourName');
            renderName.style.paddingTop = '10px';
            renderName.appendChild(yourName);
        
        let renderAge = document.getElementById('age');
            renderAge.style.paddingBottom = '5px';
            renderAge.appendChild(yourAge);
    }
}
function reset(){
    setTimeout(location.reload.bind(location), 0000);
}
