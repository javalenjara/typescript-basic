type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

//Type intersection. Similar to interfaces in java
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};
