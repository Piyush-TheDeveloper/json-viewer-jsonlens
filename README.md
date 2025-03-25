# JSON Lens - JSON Data Viewer

## Project Description

The **JSON Lens - JSON Data Viewer** is a web application designed to simplify the visualization of complex JSON data. Users can input their raw or organized JSON data, which is then displayed in two formats: **Tree View** and **Table View**. This provides an easy-to-navigate structure for both hierarchical and flat views, helping users understand their JSON data more clearly.

## Problem Statement

JSON data is a commonly used format for transmitting and storing data. However, raw JSON can be difficult to interpret, especially when the structure is complex and deeply nested. Manually reading through such data can be cumbersome, leading to potential errors and misunderstandings. 

Thus, the need arises for a tool that can:
- Visually represent the structure of JSON data in a hierarchical format.
- Flatten JSON data for easy reference in tabular form.
- Detect invalid JSON and give instant feedback to users.
- Make JSON more readable and digestible.

## Solution

**JSON Lens - JSON Data Viewer** solves these problems by allowing users to input raw JSON, which is then validated and rendered in both a tree-like structure and a flattened table structure. The app:
- Highlights invalid JSON inputs and helps users correct their data.
- Presents JSON data in a navigable **Tree View**, making it easier to comprehend deeply nested data structures.
- Displays the same data in a **Table View**, flattening nested properties into key-value pairs for easy reading.
- Aims to improve user productivity by providing a user-friendly interface to explore their JSON data.

## Tech Stack

The following technologies were used to build this project:
- **React**: Frontend framework for building the user interface.
- **JavaScript (ES6+)**: Core programming language used for React components and logic.
- **CSS**: For designing and styling the application with a modern, responsive, and interactive layout.
- **JSON**: Data format used for input/output and visualization.

## Application Features

### 1. **Input Area**
- This section provides a text area where users can input or paste their JSON data. 
- As the user types, the input is validated in real-time to ensure it's valid JSON.
- If the data is invalid, an error message is displayed.
- The validated JSON data is passed to both the Tree View and Table View components.

### 2. **Tree View**
- This section provides a hierarchical view of the JSON data.
- It presents nested objects and arrays with a collapsible/expandable tree structure.
- Users can easily explore deeply nested objects by expanding and collapsing nodes.
- The Tree View helps visualize the relationships between keys and values in the JSON structure.

### 3. **Table View**
- This section displays the JSON data in a tabular format, where each key is flattened, showing the full path of the nested data.
- It’s useful for users who want a quick reference of key-value pairs.
- The table format allows easy scanning of data, especially for simpler or flatter JSON structures.

### 4. **Error Handling**
- When the user inputs invalid JSON, an error message is displayed, prompting them to correct the data.
- Real-time validation is performed in the **Input Area**, preventing any broken or malformed JSON from being processed.

## Future Enhancements

There are several enhancements that can be made to further improve the usability and feature set of this application:

### **1. Pretty Format JSON**
- A **"Pretty Format"** checkbox or button can be added to the interface.
- When checked, it will take any raw or unorganized JSON data and display it in a neatly formatted, indented structure, making it easier to read before processing.
- This feature will help users clean up their JSON before it's displayed in the Tree and Table views.

### **2. Search Functionality**
- Add a search bar in the Tree View and Table View sections that allows users to quickly locate specific keys or values in their JSON data.
- This will be especially useful for large and deeply nested JSON objects.

### **3. Expand All/Collapse All**
- Add controls for users to **expand all** or **collapse all** nodes in the Tree View with a single button.
- This would save users from manually expanding/collapsing every node when dealing with deeply nested data.

### **4. JSON Download**
- Add a feature that allows users to download the validated and formatted JSON data.
- This would be useful for users who input raw data, visualize it, and want to save the clean version for future use.

## Folder Structure
.
├── public
├── src
│   ├── components
│   │   ├── InputArea.jsx
│   │   ├── TableSection.jsx
│   │   ├── TreeView.jsx
│   ├── App.css
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md

