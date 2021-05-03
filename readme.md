# Map Link

## Form

### Form validation

There are two functions to validate the user input. ```validateInputGroup(inputBoxes)``` validate a group of inputs. ```validateSingle(input)``` validate a single input.
To use, add the ```formHandler.js``` to the end of the document. The functions will validate any types inputs that has ```reauired``` attribute.

The validation functions will create following element below the input elements:

```html
<div class="valid-feedback" style="display: block;">This is required</div>
```

## Map