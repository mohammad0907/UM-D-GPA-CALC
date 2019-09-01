import React, {Component} from "react";
import ReactDOM from "react-dom";
import TextBoxes from "./textFields"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';



class App extends Component {
  constructor() {
    super();
    this.state = {
     disp: "none",
     gpas: 0.0,
      subject: [
        {
          gpa: "",
          credit: ""
        }
      ]
    };
  }

  addClasses = () =>{
      this.setState({
        subject: this.state.subject.concat({gpa: "", credit: ""})
      })
  }

  handleGpaChange = (idx) => (e) =>{
   

    const newGPA = this.state.subject.map((grades, sidx) => {
      if(idx !== sidx){
        return grades
      }else{
     
        return {...grades, [e.target.name] : e.target.value, [e.target.name] : e.target.value}
      }
    })

  

    this.setState({
      subject : newGPA,
      disp : "block",
      gpas: ""
    })
  }

  handleRemoveAClass = idx => () =>{
   let deletedItemArray = [{}]
   deletedItemArray = this.state.subject
   

   console.log(deletedItemArray)

   deletedItemArray.splice(idx, 1)

   console.log(deletedItemArray)
   this.setState({
     subject : deletedItemArray
   })

   console.log(this.state.subject)

  }



  CalcGpa = (e) =>{
    e.preventDefault()
    let gpa = 0
    let sub = this.state.subject
    let credits = 0
      const regExp = /^[-+]?[0-9]*\.?[0-9]+\b$/gi
    let checkGpa = " ";
    let checkcredit = "";
    let validation= true;
   

    console.log()
     
    for(let i = 0; i < sub.length; i++){
      checkGpa = sub[i].gpa.match(regExp)
      checkcredit = sub[i].credit.match(regExp)

      console.log(checkGpa, checkcredit)
      if(checkGpa === null || checkcredit === null){
        alert("invalid input, check input")
        validation = false
        break;
      }
      
      validation = true;
      gpa = gpa + (parseFloat(sub[i].gpa) * parseFloat(sub[i].credit))
      credits = parseFloat(sub[i].credit) + credits
    }
  if(validation === true){
    gpa = gpa / credits



    console.log(gpa)

    this.setState({
      gpas: gpa,
      disp:"block"
    })
    }else{
      this.setState({
        disp: "none"
      })
    }
  }

  
  

  render() {
    const styles ={
      float: "right",
      margin: "20px"
    }
    const grades = this.state.subject.map((item, idx) => {
      return (
        <Paper style ={{padding: "10px"}}>
        
        <Typography component="p">
          class #{idx + 1}: {item.gpa} credit: {item.credit}
        </Typography>
      </Paper>
      )
    })
    const disp = {
      display : this.state.disp
    }
    return (
      <Container fixed>
        
        <form onSubmit = {this.CalcGpa}>
          {this.state.subject.map((subject, idx) => (
          <div>
            
            <TextBoxes 
            Gpa = {subject} 
            change = {this.handleGpaChange(idx)} 
            del = {this.handleRemoveAClass(idx)}
            />
          </div>
        ))}

        
        
        <Fab style = {styles}color="primary" aria-label="Add" onClick = {this.addClasses}>
        <AddIcon />
      </Fab>
            
     

      <ButtonGroup type = "submit" fullWidth aria-label="Full width outlined button group">
          <Button type = "submit">Calculate GPA</Button>  
        </ButtonGroup>
        
        </form>
        
        

       <p style = {disp}> {grades} </p>

       <p style = {disp}> 
       <Paper style ={{padding: "10px"}}>
        
        <Typography component="p">
          GPA: {this.state.gpas}
        </Typography>
      </Paper>
       
       </p>

                
      </Container>
    );
  }
}

export default App;
