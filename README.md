# Mizan — Precious Metals Prices

Mizan is a web application developed for **Bijouterie Al Andalous** in Nador.

The application allows users to check gold and silver prices, view price variations, explore historical prices, and estimate the value of jewelry based on its weight.

## Project Objectives

- Display the latest gold and silver prices.
- Show price variations compared with the previous period.
- Allow users to change the display currency.
- Display historical prices over 7 or 30 days.
- Estimate jewelry value based on its weight and metal.
- Handle loading states, API errors, and retry requests.

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- JavaScript ES Modules
- Tailwind CSS
- Fetch API
- JSON

## Project Structure

```text
mizan/
│
│
├── src/
│   └── js/
│       ├── main.js
│       ├── api.js
│       ├── ui.js
│       ├── calculations.js
│       ├── storage.js
│       └── chart.js
├── index.html
└── README.md
```

## API Used

**API Provider:** XAU

```text
GET https://xaus.com/api/v1/spot
```

**Parameters:** No query parameters are currently used by the spot request.

The API response provides information such as:

- Gold price: `xau.price`
- Gold currency: `xau.currency`
- Silver price: `silver_usd_oz`
- Last update: `updated_at`
- Gold price timestamp: `price_as_of`

The application retrieves the data using the JavaScript Fetch API.

## Technical Choices

- **Vanilla JavaScript:** Used to build the application without a JavaScript framework.
- **ES Modules:** Used to separate application logic into different files.
- **Fetch API:** Used to communicate with the external API.
- **DOM Manipulation:** Used to generate and update HTML elements dynamically.
- **Async/Await:** Used to handle asynchronous API requests.
- **Try/Catch:** Used to handle errors during requests.

## Difficulties and Solutions

This section will document the actual difficulties encountered during development.

| Difficulty | Solution |
|---|---|
| Understanding API responses | Inspected the returned JSON structure |
| Handling asynchronous requests | Used async/await |
| Handling HTTP errors | Checked `response.ok` |
| Displaying API data | Used DOM manipulation |

Additional difficulties and solutions will be added as development continues.


## Project Information

**Project:** Mizan

**Client:** Bijouterie Al Andalous

**Location:** Nador, Morocco

**Development:** YouCode Nador

**Year:** 2026

## GitHub Repository

Repository link: ([Repo](https://github.com/moelayachi94-lgtm/Mizan))
