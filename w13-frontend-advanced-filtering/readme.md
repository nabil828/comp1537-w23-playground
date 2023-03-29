# Frontend Advanced Filtering 
Design a web page to access the unicorns database. The web page allows searching by name, weight, or type of food. 

After search is done, it allows filtering the fields. 


![](https://cdn.discordapp.com/attachments/1017862173881544775/1046893800670371880/screencapture-localhost-5000-2022-11-28-13_01_47.png)


## Tests
- If searching is working, you should get [6] marks
```

Test Case 1
Name = Aurora
Result: Aurora's object

Test Case 2
400 <= weight <= 600 
Result => Horny,Aurora,Roooooodles,Solnara,Raleigh,Nimue

Test Case 3
200 <= weight <= 450 
Result => Aurora,Raleigh

Test Case 4
Unicorns which like carrot
Result => Horny,Aurora,Solnara,Nimue

Test Case 5
Unicorns which like apple
Result => Roooooodles,Solnara,Raleigh,Leia,Pilot

Test Case 6
Unicorns which like apple and carrot
Result => Solnara
```


```
Test Case 7 - Filter Name Only
Test Case 8 - Filter Weight Only
Test Case 9 - Filter Name and Weight together
Test Case 10 - No Filters
```
