We want to build a word highlighter. A word highlighter scans a piece of text and highlights up to 2 occurrences of a given word. To achieve our goal, we need to build a web page that has a user interface that will accept two inputs. 

**Input 1:** *A sentence that is shorter than 100 words.*

**Input 2:** *A word.*

The user interface should have a button named “Highlight”. On clicking the submit button, the following should happen:

The sentence from Input 1 should be displayed as a header on the page with every occurrence of  the word from Input 2 displayed in upper case and highlighted in colour: #FFFF00. If the word does not exist in the sentence, a popup should be displayed with the message “Cannot highlight word in sentence.” If there are more than 2 occurrences of the word, the browser should display a popup with the message “Too many occurrences to be highlighted”.

# Examples

## Scenario 1:

**Input 1:** “The quick brown fox jumps over the lazy dog”.

**Input 2:** “jumping”

**Result:** Display popup with the message “Cannot highlight word in sentence.”

## Scenario 2:

**Input 1:** “The quick brown fox jumps over the lazy dog”.

**Input 2:** “jumps”

**Result:** the sentence is displayed as a header and “jumps” is highlighted.

## Scenario 3:

**Input 1:** “The quick brown fox jumps over the lazy dog”.

**Input 2:** “The”

**Result:** the sentence is displayed as a header and “The” and “the” are highlighted.

## Scenario 4:

**Input 1:** “The quick brown fox jumps over the lazy dog and the sheriff”.

**Input 2:** “The”

**Result:** Display a popup with the message “Too many occurrences to be highlighted”