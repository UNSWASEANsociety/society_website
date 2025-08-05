import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./EventsNavBar.module.scss";

const EventsNavBar = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { key: "all", label: "All Events" },
    { key: "upcoming", label: "Upcoming" },
    { key: "past", label: "Past Events" }
  ];

  return (
    <nav className={styles.navBar}>
      <div className={styles.filterContainer}>
        {filters.map((filter) => (
          <button
            key={filter.key}
            className={`${styles.filterButton} ${
              activeFilter === filter.key ? styles.active : styles.inactive
            }`}
            onClick={() => onFilterChange(filter.key)}
          >
            <Typography variant="h6" component="span">
              {filter.label}
            </Typography>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default EventsNavBar;
