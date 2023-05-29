# Employee Viewer
The purpose of this project to be a dynamically generated website. At this time, the form used to modify the employees and projects and the table displaying each is created using a generic table and form creator.

# Technology
- Angular v14.3
- Typescript
- CSS
- HTML
- C# with .NET Core v6

# Instructions
- Install latest from node.JS from https://nodejs.org/en/download.
- Clone repo.
- Open sln file in IDE. Recommended to use the 2022 Visual Studio Community if another version of Visual Studio is not installed.
- Restore NuGet packages.
- On a command line, navigate to the angular project at ClientApp. Run npm install --force.
- Rebuild solution in Visual Studio.
- Set run project to EmployeeViewer.
  ![image](https://github.com/PetersenEmerald/EmployeeViewer/assets/46093775/822493f7-671d-41b8-97ad-2bcd1a1f640b)
- Click Run.
- If prompted, accept certificate install.
- If you receive an error similar to the screenshot below, you will need to enable allow insecure localhost.
  ![image](https://github.com/PetersenEmerald/EmployeeViewer/assets/46093775/0e42eff0-76ce-4b86-babf-ccd8c8ae4d42)
  
  Fix Instructions to Enable Insecure Localhost
  - To enable, go to chrome://flags/#allow-insecure-localhost.
  - Set "Allow invalid certificates for resources loaded from localhost." to Enabled.
    ![image](https://github.com/PetersenEmerald/EmployeeViewer/assets/46093775/63f0fb92-f0a5-4937-a7e1-9ca21498b55a)


# Website Directions
- To view employees, click the Employee tab. This is the default tab on website load.
  - Employee Table
    - View all employees.
- To view Employee Form, select an employee in the Employees table. This will open a dialog with the Employee Form.
  - Employee Form Actions
    - Save 
    - New
    - Delete
- To view projects, click the Project tab.
  - Project Table
    - View all projects.
- To view Projects Form, select a project in the Projects table. This will open a dialog with the Project Form.
  - Project Form Actions
    - Save
    - New
    - Delete

Created using Visual Studio Community 2023.
