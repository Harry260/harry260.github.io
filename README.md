# [My OS-like Interactive Portfolio!](https://harrytom.netlify.app)
| Dynamic and Fully Configurable via json files

[![Netlify Status](https://api.netlify.com/api/v1/badges/1b911f79-2aad-4d09-8b6e-67b4222378e7/deploy-status)](https://app.netlify.com/sites/harrytom/deploys)

- No need to edit `html` to remake this
- Fully configurable from `json` files

| THIS WEBSITE WAS INSPIRED BY [MATTHEW P MUNGER'S](https://webflow.com/matthewpmunger) PORTFOLIO |
|------------------------------------------------------------------------------------------------------------------------|

## How to Customize?

There is three files you can customize,

| File          | Use                                      |
|---------------|-----------------------------------------------|
| [social.json](#socialjson)  | Replace the values with your social profiles. |
| [projects.json](#projectsjson) | Replace the values with your projects data    |
| [apps.json](#appsjson)    | Setup apps and desktop                        |

## `social.json`
This file is used to configure Social Profiles. See the below object to understand the structure

```
{
"links":{
    "[social_platform]": "[link]"
    // .....
},
"maxonmenu": 5 // INT
}
```

| Key               | Description                                  |
|-------------------|----------------------------------------------|
| [social platform] | Name of social platform                      |
| [link]            | Link to your profile                         |
| maxonmenu         | The maximum no. of items to be shown in menu |


## `projects.json`
This file is used to configure Projects. See the below object to understand the structure

##### EXAMPLE
```
"project_id": {
    "id": " project_id",
    "title": "Project Title",
    "icon": "icons/project.svg", // Root folder is assets
    "description": "my aswesome project",
    "link": "https://example.com/",
    "github": "http://github.com/user/repo",
    "openTarget": "_self"
}
```

| Key             | Description                                                                                     |
|-----------------|-------------------------------------------------------------------------------------------------|
| title           | Title of your project                                                                           |
| id / project_id | Unique id for your project                                                                      |
| icon            | Icon Image for your project<br>NB: The root folder for icon path is [assets](assets)            |
| description     | Short description about your projects (Future Use)                                              |
| link            | The link of your project                                                                        |
| github          | Your git repository link                                                                        |
| openTarget      | Set if you wan to open the project in new tab or not<br>`_self` : Same tab<br>`_blank`: New tab |

## `apps.json`

This file is used to configure Apps like things in the protfolio, Example "README.md" inside the project or "VS code" inside it . See the below object to understand the structure
```
"app_id":{
    "icon": "appicon.svg",
    "title": "App Title",
    "action" : "app_id",
    "type": "iframe",
    "id": "app_id",
    "src": "https://example.com",
    "desktop": true
}
```

| Key       | Description                                                                                         |
|-----------|-----------------------------------------------------------------------------------------------------|
| Icon      | Icon of the app<br>NB: The root folder is [assets/icons](assets/icons)                              |
| Title     | Title of the app                                                                                    |
| action/id | Unique app id, both should be same (i messed it up)                                                 |
| src       | src of your app. Eg, Create an HTML file as an app.                                                 |
| type      | Set the type of your app<br>`mark-down`: if src is a Markdown file<br>`iframe`: If src is html file |
| desktop   | If app should be showed on Desktop                                                                  |

<hr>
