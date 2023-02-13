#How CSS Works: A look behind the scenes

When a user opens the page, it parses the loaded HTML line by line and creates the DOM. This is where the decoded page is stored.

When it parses the HTML it loads the CSS and parses this as well.CSS conflicts are resolved through cascaing and the final value of the CSS values are determined. The CSS is stored as the CSS Object Model or the CSSOM.

Based on the trees above, the page is rendered in the final visual format model. The final renderer is then revealed to the user.

#Three Pillars of HTML and CSS

1. Responsive Design

A standard design that means your web app responds to to commands and changes.
* Fluid Layouts
* Media Queries
* Responsive Images
* Correct Units
* Desktop-first vs Mobile-first

2. Maintainable And Scalable Code
* Clean
* Easy-to-Understand
* Growth
* Reusable
* How to organize files
* How to name classes
* How to structure HTML

3. Web Performance

The Page needs to be small to maaintain speed
* Less HTTP Requests
* Less Code
* Compress Code
* Use a CSS preprocessor
* Fewer Images
* Compress Images

CSS Rule
Selctor {Declaration block}

C-Cascade: The process of combining different stylesheets and resolving conflicts between different CSS rules and declarations, when more than rule applies to a certain element. IT combines the declarations fron Author, User and Broswer based on the imprtance, Specificity, and Source order.

Importance
1. User !important declarations
2. Author !important declarations
3. Author Declarations
4. User Decalartaions
5. Default browser declarations

Specificity
1. Inline styles
2. IDs
3. Classes, pseudo-classes, attribute
4. Elements, psudo-elements

Source Order
The last declaration if he same level will be applied

BEM
Block Element Modifier layers class names based on their usage to make them as clear as possible for keeping them up to date and

BLOCK: Standalone compotnent that is meaningful on its own
ELEMENT: Part of a block that has no standalon meaning
Modifier: A different version of a block or an element

#SASS

SASS is a CSS preprocessor, an extension of CSS that adds power and elegance to the basic language. It add the below features.

* Variables
* Nesting
* Operators
* PAtials and imports
* Mixins
* Functions
* Extends
* Control directives

Note: Sass syntax != SCSS

#Responsive Design

1. Fluid Layouts
* Allow a webpage to adapt to the current viewport width
* Use %(or vh/vw) unit instead of pxfor elements that should adapt to viewport
* use Max-width instead of width

2. Responsive Units
* Use rem instead of px for most lenghts
* To make it easy to scale the entire layout down/up automatically 

3. Flexible Images
* By default images don't scale automatically as we change the view port, so this needs to be fixed
* Always use % for images demensions, together with max-width 

4. Media Queries
* To cahnge css for different viewports

#Layout Types

1. Float
The old way of building layoutsusing the css float property. still used but becoming dated.

2. Flexbox
Modern way of laying out components in a single row

3. CSS Grid
For laying out elements in full-fledged 2d grids