//import styles from 'styles/cardlist.module.css'

import { Grid } from "@mui/material"

export default function CardList({ children }) {
    return (
        <Grid container spacing={4}>
          {children.map((children, index) => (
            <Grid key={index} item xs={12} sm={4} md={3}>
              {children}
            </Grid>
          ))}
        </Grid>
    )
}