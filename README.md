# Employee Viewer
The purpose of this project to be a dynamically generated website. At this time, the website uses a mock database to generate its tabs, tables, and forms.

# Technology
- Angular v14.3
- Typescript
- CSS
- HTML
- C# with .NET Core v6

# Instructions
- Install latest from node.JS from https://nodejs.org/en/download.
- Recommended to use [2022 Visual Studio Community](https://visualstudio.microsoft.com/downloads/) if another version of Visual Studio is not installed.
- Clone repo.
- Open sln file in IDE. 
- Right click on Solution and select Restore NuGet Packages.

  ![image](https://github.com/PetersenEmerald/EmployeeManager/assets/46093775/f67ff84a-4b42-4142-94f7-090e30a795cc)
- On a command line, navigate to the angular project at ClientApp, run: npm install --force.

  ![image](https://github.com/PetersenEmerald/EmployeeManager/assets/46093775/6685bf1c-0d4a-4990-9bf5-4acd059d4edf)
- Right click on Solution and select Rebuild Solution.

  ![image](https://github.com/PetersenEmerald/EmployeeManager/assets/46093775/e9512680-b82a-4be5-8340-8d7f1f7a077f)
- On a command line still on ClientApp, run: npm start.
- Set run project to EmployeeManager.

  ![image](https://github.com/PetersenEmerald/EmployeeManager/assets/46093775/822493f7-671d-41b8-97ad-2bcd1a1f640b)
- Click Run.
- If prompted, accept certificate install.
- If you receive an error similar to the screenshot below, you will need to enable allow insecure localhost.
  ![image](https://github.com/PetersenEmerald/EmployeeManager/assets/46093775/0e42eff0-76ce-4b86-babf-ccd8c8ae4d42)
  
  Fix Instructions to Enable Insecure Localhost
  - To enable, go to chrome://flags/#allow-insecure-localhost.
  - Set "Allow invalid certificates for resources loaded from localhost." to Enabled.
    ![image](https://github.com/PetersenEmerald/EmployeeManager/assets/46093775/63f0fb92-f0a5-4937-a7e1-9ca21498b55a)
  - Run EmployeeManager.


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
