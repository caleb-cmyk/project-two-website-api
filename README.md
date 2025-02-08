# Country and Ethnic Group Research Site
This App tracks and gives information about countries and ethnic groups from around the world. Add ethnic groups to a list and see visualisations of their locations, population densities and more! Your list will be maintained in the cloud so that you can view it again anytime.

<img width="501" alt="image" src="https://github.com/user-attachments/assets/1524b3f4-bece-40ca-843b-8602af848ece" />

Try the App [here](https://classy-dango-87dddb.netlify.app/).

# Project Brief
1 week for project development and deployment. Project must contain 5 components, 4 props, 2 useStates, 2 React router routes, and 1 state lifted.

### Technologies Used
- React
- Vite
- Javascript
- Git/GitHub
- Netlify
- Airtable
- Bruno

# User Stories
- As a user, I want to see info on each country I select
- As a user, I want to see info on each ethnic group I select
- As a user, I want to add countries to my list for later research
- As a user, I want to add ethnic groups to my list to see visualisations comparing the data of countries on my list
- As a user, I want to be able to navigate the site easily with clear buttons and links

# Pseudocode

```
WHEN user clicks the "Countries" button
  THEN page shows a list of all the countries in the world
  with each country having its own button for "Details" and "Add to List"
```
```
WHEN user clicks on "Details"
  THEN page navigates to a country details page showing key information of said country
  and "Add to List" button is also present.
  Ethnic groups are listed, each with "Details" (ethnic group) and "Add to List" (ethnic group) buttons.
```
```
WHEN user clicks on "Add to List" button on either countries or country details page
  THEN country is added to their list
```
```
WHEN user clicks on "Details" (ethnic group)
  THEN page navigates to a details page of the ethnic group where key information is displayed
```
```
WHEN user clicks on "Add to List" (ethnic group)
  THEN page navigates to ethnic group list page where visualisations are displayed
```

![WhatsApp Image 2025-02-08 at 9 00 14 PM](https://github.com/user-attachments/assets/59684230-a1b5-45b7-9770-88460c31c8a2)


# Summary and After-actions
This project was a good exercise in pulling raw data from an API and manipulating it to create an app. Structuring the app into different components and state management were crucial. Passing data and understanding the function of every element and their links to the others were key to making it operational.

### Improvements

- Style site
- Pull more concise and accurate data
- Add ethnic groups to user list where map with population density visualised
- Add visual "loading" prompts while essential data is being loaded to display
- Add visual "added to list" prompt when elements added to user list
- Rethink UIUX for "add to list" button. Possibly change text to "already on list" when clicked.

# Attributions
[Joshua Project API](https://joshuaproject.net/resources/datasets)

[FIPS Country Codes Classification](https://en.wikipedia.org/wiki/List_of_FIPS_country_codes)
