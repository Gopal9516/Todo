import React, {useState} from 'react'
import {FormControl, Container,TextField, Button} from '@material-ui/core'

export default function TodoForm({addTodo}) {
    const [text,setText]=useState("")
    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo(text)
    }
  return (
    <Container  maxWidth='sm'>
        <form onSubmit={handleSubmit}>
            <FormControl fullWidth={true}>
                <TextField label="I will do this" required={true} value={text} onChange={(e)=>setText(e.target.value)}
                    />
            <Button variant='contained' color='primary' type='submit' style={{marginTop:5 }}>ADD TODO</Button>
            </FormControl>
        </form>
    </Container>
  )
}
