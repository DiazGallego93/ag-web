
$(document).ready(function(){
    $('.submitButton').click(function(event){
        event.preventDefault()

        var name = $('.name').val()
        var lastname = $('.lastname').val()
        var email = $('.email').val()
        var phone = $('.phone').val()
        var address = $('.address').val()
        var message = $('.message').val()
        var statusElem = $('.status')
        statusElem.empty()

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElem.append('<div>Email is valid.</div>')
        } else {
            statusElem.append('<div>Email is not valid.</div>')
        }
    })
})