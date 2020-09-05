import React, { Component } from "react";
import { motion } from "framer-motion";
import "./App.css";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import Notes from "./notes";
import $ from "jquery";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [{ title: "Notes Web", desc: "Using React, motion-framer" }],
      colorL: [
        "rgb(213, 254, 255)",
        "rgb(255, 213, 255)",
        "rgb(255, 251, 213)",
        "rgb(255, 213, 213)",
        "rgb(215, 200, 215)",
      ],
      title: "",
      desc: "",
    };
  }

  handlerNote = () => {
    if (this.state.title.length >= 1 && this.state.desc.length >= 1) {
      this.setState({
        notes: [
          { title: this.state.title, desc: this.state.desc },
          ...this.state.notes,
        ],
        title: "",
        desc: "",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Grid container justify="center">
          <Grid item sm={8}>
            <Paper
              style={{
                padding: "20px",
                margin: "20px",
                borderRadius: "20px",
                background: "rgb(240, 240, 240 )",
              }}
            >
              <header
                style={{ margin: "10px", fontSize: "30px", fontWeight: "bold" }}
              >
                Notes
              </header>
              <TextField
                style={{ margin: "10px", width: "55%" }}
                id="title"
                label="Title"
                type="text"
                variant="outlined"
                value={this.state.title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
              <br />
              <TextField
                style={{ margin: "10px", width: "55%" }}
                id="desc"
                label="Descripition"
                multiline
                rows={4}
                variant="outlined"
                value={this.state.desc}
                onChange={(e) => this.setState({ desc: e.target.value })}
              />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.handlerNote}
              >
                Add Note
              </Button>
            </Paper>
          </Grid>
          <Grid container item sm={10}>
            <Grid item sm={6}>
              <Paper
                style={{
                  padding: "20px",
                  margin: "20px",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gridGap: "10px",
                  borderRadius: "20px",
                  background: "#333",
                  border: "0px solid ",
                  boxShadow: "0 0 0 0 black",
                }}
              >
                {this.state.notes &&
                  this.state.notes.map(
                    (note, index) =>
                      index % 2 === 0 && (
                        <motion.div key={index + "e"}>
                          <Notes
                            note={note}
                            colorL={this.state.colorL}
                            index={index}
                          ></Notes>
                        </motion.div>
                      )
                  )}

                {this.state.notesL}
              </Paper>
            </Grid>
            <Grid item sm={6}>
              <Paper
                style={{
                  padding: "20px",
                  margin: "20px",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gridGap: "10px",
                  borderRadius: "20px",
                  background: "#333",
                  border: "0px solid ",
                  boxShadow: "0 0 0 0 black",
                }}
              >
                {this.state.notes.map(
                  (note, index) =>
                    index % 2 === 1 && (
                      <Notes
                        key={index + "o"}
                        className="   "
                        note={note}
                        colorL={this.state.colorL}
                        index={index}
                      />
                    )
                )}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
