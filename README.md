# Feb2025_data_week14
Data Bootcamp Week Fourteen Interactive Visualizations

This interactive dashboard visualizes microbial diversity found in human belly buttons using a dataset of test subject samples. The goal of this project was to build an interactive web-based dashboard that allows users to explore key metadata and microbial distribution for each test subject.

What was done:
Dropdown Menu: A dynamic dropdown list was created that allows the user to select a test subject ID number. The dashboard updates based on the selected sample.
Demographic Panel: The dashboard displays demographic information about the selected subject, such as age, gender, ethnicity, and location. This metadata was dynamically loaded from a JSON file and presented in an easy-to-read format.
Bar Chart: A horizontal bar chart was generated using Plotly to show the top 10 bacterial species (OTUs) found in the selected test subject, sorted by their abundance.
Bubble Chart: A bubble chart was created to visualize microbial abundance across all OTU IDs for the selected subject. The chart uses markers of varying size and color to represent each OTU's abundance and ID.