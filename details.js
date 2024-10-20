function navigateTo(subject,teacher,contact)
{
    localStorage.setItem('subject',subject);
    localStorage.setItem('teacher',teacher);
    localStorage.setItem('contact',contact);
    window.location.href='details.html'
}