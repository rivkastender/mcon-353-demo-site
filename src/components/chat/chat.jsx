import * as React from "react";
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  Button,
  ListItemText,
  Divider,
  InputBase,
  IconButton,
  ListSubheader,
  Grid,
  Stack,
  Paper,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useInterval } from "../../hooks/use-interval";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [username, setUsername] = useState("");
  const [newChat, setNewChatInput] = useState("");

  function getChats() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats")
      .then((response) => response.json())
      .then((data) => {
        setChats(data.Items);
      });
  }

  function settingChat(chat) {
    setCurrentChat(chat);
    getMessages(chat.id);
  }

  function getMessages(chatId) {
    fetch(
      `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
    )
      .then((response) => response.json())
      .then((data) => {
        setMessages(data.Items);
      });
  }

  function changeUsername(event) {
    setUsername(event.target.value);
  }

  function newChatInput(event) {
    setNewChatInput(event.target.value);
  }

  function setNewChat() {
    const chat = {
      name: newChat,
    };
    fetch(`https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chat),
    })
      .then((response) => response.json())
      .then((data) => {
        setNewChatInput("");
        settingChat(data.Item);
      })
      .then(() => {
        getChats();
      });
  }

  function postMessage() {
    if (currentChat != null) {
      //really doesn't need != null
      const message = {
        chatId: currentChat.id,
        username: username,
        text: inputMessage,
      };

      fetch(`https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", //tells REST that we will send the body data as a Json
        },
        body: JSON.stringify(message),
      });

      setInputMessage("");
    } else {
      console.log("cannot post a message because currentChat is null");
    }
  }

  function onMessageInput(event) {
    setInputMessage(event.target.value);
  }

  useEffect(() => {
    getChats();
  }, []);

  useInterval(
    (params) => {
      const chatId = params[0];
      if (chatId) {
        getMessages(chatId);
      }
    },
    1000,
    currentChat && currentChat.id
  );

  return (
    <>
      <Typography
        sx={{ fontSize: 45, marginLeft: 45, marginTop: 5 }}
        color="text.secondary"
        gutterBottom
      >
        {currentChat && currentChat.name} Messages:
      </Typography>
      <center>
        <Box
          sx={{
            maxWidth: 800,
            height: 513,
            boxShadow: 1,
            borderRadius: 2,
            marginTop: 5,
            marginBottom: 5,
          }}
        >
          <Grid container>
            <Grid item md={4.6}>
              <div style={{ display: "flex" }}>
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 300,
                    bgcolor: "background.paper",
                    position: "relative",
                    overflow: "auto",
                    height: 450,
                    "& ul": { padding: 0 },
                  }}
                  subheader={<li />}
                >
                  {[0].map(() => (
                    <ul>
                      <ListSubheader
                        sx={{
                          textAlign: "left",
                          fontSize: 25,
                          fontWeight: "bold",
                        }}
                      >
                        CHATS:
                        <Divider />
                        <InputBase
                          sx={{ flex: 1, fontSize: 15 }}
                          placeholder="Add New Chat"
                          onInput={newChatInput}
                          value={newChat}
                        />
                        <IconButton type="button">
                          <AddIcon onClick={() => setNewChat()} />
                        </IconButton>
                      </ListSubheader>
                      <Divider dark />

                      <ListItem>
                        <ListItemText
                          primary={chats.map((chat) => (
                            <div onClick={() => settingChat(chat)}>
                              {chat.name}
                            </div>
                          ))}
                        ></ListItemText>
                      </ListItem>
                    </ul>
                  ))}
                </List>
              </div>
            </Grid>
            <Grid
              item
              md={7.4}
              sx={{ height: 457, width: 300, marginRight: -20 }}
            >
              <div>
                <TextField
                  label="Enter Username: "
                  onChange={changeUsername}
                  sx={{
                    paddingBottom: 1,
                    minWidth: 385,
                    maxWidth: 500,
                    pr: 0.5,
                  }}
                />
              </div>
              <Box>
                <List
                  sx={{
                    maxHeight: 375,
                    overflow: "auto",
                  }}
                >
                  {[0].map(() => (
                    <ul sx={{ alignItems: "right" }}>
                      <ListItem>
                        <Stack
                          direction="column-reverse"
                          justifyContent="left"
                          alignItems="left"
                          spacing={2}
                        >
                          {messages.map((message) => (
                            <Item
                              sx={{
                                backgroundColor: "#f5f5ef",
                                alignContent: "left",
                                alignItems: "left",
                                color: "gray",
                                textAlign: "left",
                                minWidth: 200,
                                maxWidth: 300,
                              }}
                            >
                              <Box sx={{ fontSize: 11, marginBottom: -1 }}>
                                -{message.username}
                              </Box>
                              <br />
                              <Box sx={{ fontSize: 16, marginTop: -1 }}>
                                {message.text}
                              </Box>
                            </Item>
                          ))}
                        </Stack>
                      </ListItem>
                    </ul>
                  ))}
                </List>
              </Box>
            </Grid>
          </Grid>
          <TextField
            disabled={username === ""}
            placeholder="Enter Message:"
            onInput={onMessageInput}
            value={inputMessage}
            sx={{ width: 735, marginLeft: -4 }}
          />
          <Button
            sx={{
              border: ".25px solid black",
              marginRight: -4,
              height: 55,
              backgroundColor: "#f5f5ef",
            }}
            onClick={() => postMessage()}
          >
            <IconButton type="button">
              <AddIcon />
            </IconButton>
          </Button>
        </Box>
      </center>
    </>
  );
};
