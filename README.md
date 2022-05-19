# haskell-project

[![Appveyor status](https://ci.appveyor.com/api/projects/status/qav0qqlygokwxdrc?svg=true)](https://ci.appveyor.com/project/lordmilko/haskell-project)

haskell-project is a Visual Studio Code extension for simplifying the process of creating new Stack based Haskell projects.

By default, `stack new` creates a very complex project containing a whole bunch of files you might not even want. If you want to create a simpler project, you need to remember a complex series of command line arguments and parameter names. This is not user friendly, nor is the fact Visual Studio Code does not have a standardized project template manager like Visual Studio does.

To use haskell-project:
1. Create a new folder and open it in Visual Studio Code
2. Do Ctrl+Shift+P to open the Command Palette, type in *haskell* and one of the available templates.

   As of writing, the following templates are supported
   * New Project (App): Creates a simple project with a `Main.hs` file
   * New Project (Library): Creates a simple project with a `Lib.hs` file