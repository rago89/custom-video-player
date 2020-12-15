# Project Title

An interactive website where the user can play videos and make cool stuff like re-entizing a video

---

## User Story Dependencies

[Story Dependency Diagram](../public\Stories-dependencies.png)

---

## WIREFRAME

![wireframe or figma]()

---

## 0.Setup

- [ ] Create repo
- [ ] Add Contributors
- [ ] Set up Project Board
- [ ] Start README
- [ ] Turn on GitHub Pages

## Video player play button

**As a user when play the video web I want to stop the video so that i can make a brake when if a event happens...**

- [ ] _Given any browser when the user play the video in the same button should have the option to stop the video_

### REPO

- This user story is developed on branch `togglePlay`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

### I. Play and pause the video handlers

Play and pause the video

- `togglePlay.js`: a handler that plays and pause the video. Assigned to **Krystyna**.
- `updateButton.js`: a handler that updates the button when is clicked to pause or play. Assigned to **Kristina**.

### Play and pause the video listeners

- `click-togglePlay.js`: an event that happens when the user click the play button, it will stop and pause. Assigned to **Krystyna**
- `click-togglePlay.js`: an event that happens when the user click the play button, it will change the text icon. Assigned to **Krystyna**

## II. Skip video buttons

**As a user when play the video web I want to stop the video so that i can make a brake when if a event happens...**

- [ ] _Given any browser when the user play the video in the same button should have the option to stop the video_

### REPO

- This user story is developed on branch `skip`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

### Skip video handler

- `skip.js`: a handler that skips the video in intervals of seconds forward and backward. Assigned to **Brain**.

### Skip video listeners

- `click-skip.js`: an event that happens when the user click the buttons, it will go forward or backward. Assigned to **Brain**

## III. Range video bar

**As a user when play the video web I want to make the video slower or faster so that i can see more in detail a specific part of the video...**

- [ ] _Given any browser when the user play the video should have a range bar so the user can drag in to the line and can set the speed desired_

### REPO

- This user story is developed on branch `range`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

### Range update video handler

- `handlerRangeUpdate.js`:  a handler that sets the range to put slower or faster the video. Assigned to **Brain**.

### Range update video listener

- `change-mousemov-handRangUpd.js`: an event that happens when the user click an drag the range bar, it will  put slower or faster the video. Assigned to **Brain**


## IV. Progress video bar

**As a user when play the video web I want to drag the time status bar so that i can move forward or backwards faster  ...**

- [ ] _Given any browser when the user plays the video should have the option to  tho go backwards and forward in the time status bar_

### REPO

- This user story is developed on branch `progress`.
- This branch is merged to `master` branch after the acceptance criteria have been checked off.

### Progress update video handler

- `handleProgress.js`:  a handler that sets the time in tha video when the bar in dragged. Assigned to **Divya**.
- `scrub.js`:  a handler that sets the range of the line bar to see where is the current time playing. Assigned to **Divya**.

### Progress update video listener

- `timeupdate-handleProgress.js`: an event that happens when the user clicks an drag the range bar, set the video in the time desired. Assigned to **Divya**

- `click-mouse-scrub.js`: an event that happen when the user click an drag the range bar, set the status bar video in the time desired. Assigned to **Divya**