# Crowd Movement Simulator

A visually interactive, parallelized simulation of crowd movement using agent-based modeling. This project demonstrates how individual agents (representing people/vehicles) navigate a 2D environment while avoiding collisions, forming groups, and adapting to their surroundings — all in real-time.

---

## Features

- Individual agents with simple behavior rules (avoidance, cohesion, alignment)
- Real-time simulation with smooth 2D visualization
- Parallelized agent updates using OpenMP (or MPI for distributed setups)
- Heatmaps of agent density and flow paths
- Configurable population size and environment dimensions
- Modular code design for extending behaviors

---

## Demo

![Simulation Demo](output/crowd_sim_demo.gif)

> Screenshots included later

---

## Tech Stack

- **C++** for simulation logic
- **OpenMP** for parallel agent updates
- **SDL2** / **SFML** / **OpenGL** for 2D rendering
- **OpenCV** for heatmap output



