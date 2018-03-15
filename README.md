# ui-and-dynamic-content
Rich Media Services Assignment-to do list

Website : https://kananahalpara.github.io/ui-and-dynamic-content/




Assignment : 
Task description
Create the widget that will dynamically add a shopping list-item(s) or to-do list-item(s) to a web-page. The widget fits inside entire web-page as one of its content-components. Shopping list or to-do list needs to have masthead-image, title, main-content and footer (for social media links).

Masthead
Masthead needs to have image and tag-line.

Main Content
UI elements of main content are:

text-input (entering shopping-item or to-do-item),
add-item button (calling function that will add item to the unordered list) and
unordered or ordered list (for appending users input to the web-page).
paragraph that will contain error-messages
User enters a shopping or to-do-item value into text-box, clicks the add-item button and value gets added to the web-page (as a list-item of unordered or ordered list). If user clicks the button without previously entering a value into text-field, create the error message (for example: Nothing entered!).

Footer
Footer needs to have links to 3 social media networks. You can create your own icons or just use icon-font. 

--

The screen-shot below shows the layout of widget (including all alignments, line-height and gutters of white space) that has to be replicated. However, you are going to use images, colors and font-types of YOUR CHOICE.  Use monochromatic color-scheme (color.adobe.com (Links to an external site.)Links to an external site.). The max-width of widget is 45rem.

Directories - Structure
Directory tree (including names) has to look like this:

/ui-and-dynamic-content/css/
                       /img/
                       /js/
                       /index.html
Coding Guidelines
Save the reference to text-field into a variable. | <input type="text">
Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
Save the reference to paragraph for feedback | <p class="feedback"></p>

Start function addItem.

    Create list item and store output in a variable.
    
    Check if user entered the value in input text-field.
    If so:
        Use textContent property on created list-item
        and assign it with the value of the text written in the text-field

        Append list item to unordered list.

        Clear a feedback-message.

        Clear the text-field.

        Put the cursor back to text-field 
    
    End if. 
    Otherwise:
     
        Print the message nothing entered in the paragraph "feedback"

    End otherwise.

End function addItem.

Register your function addItem for click event on button.
