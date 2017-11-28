dir2 = run_shell args: ['dir2']
dir1 = run_shell args: ['dir1']
notExist = run_shell args: ['doesNotExist']


describe "ExampleTests" do
   it "Get number of files in dir 2" do
     expect(dir2).to include('There are 2 files in /home/codewarrior/shell/dir2')
   end
   it "Get number of files in dir1" do
     expect(dir1).to include('There are 2 files in /home/codewarrior/shell/dir1')
   end
   it "Does not Exist" do
     expect(notExist).to include('Directory not found')
   end
end