function calcAge(){
  const tool = document.querySelector('.my-age-tool');
  const dob = tool.querySelector('#dob').value;
  const out = tool.querySelector('#out');

  if(!dob){
    out.innerText = 'Please select your Date of Birth.';
    return;
  }

  const birth = new Date(dob);
  const today = new Date();
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if(days < 0){
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if(months < 0){
    years--;
    months += 12;
  }

  let nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
  if(nextBirthday < today) nextBirthday.setFullYear(today.getFullYear() + 1);

  const diffTime = nextBirthday - today;
  const diffDays = Math.ceil(diffTime / (1000*60*60*24));
  let nbMonths = nextBirthday.getMonth() - today.getMonth();
  let nbDays = nextBirthday.getDate() - today.getDate();
  if(nbDays < 0){
    nbMonths--;
    const prevMonth = new Date(nextBirthday.getFullYear(), nextBirthday.getMonth(), 0);
    nbDays += prevMonth.getDate();
  }
  if(nbMonths < 0) nbMonths += 12;

  out.innerHTML = `
    ✅ Your Age: <br>
    <strong>${years} Years, ${months} Months, ${days} Days</strong><br><br>
    🎂 Next Birthday in: <br>
    <strong>${nbMonths} Months, ${nbDays} Days</strong> (≈ ${diffDays} total days left)
  `;
}

function clearAll(){
  const tool = document.querySelector('.my-age-tool');
  tool.querySelector('#dob').value = '';
  tool.querySelector('#out').innerText = 'Ready.';
}
