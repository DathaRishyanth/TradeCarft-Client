import numpy as np
import yfinance as yf
import pandas as pd
import matplotlib.pyplot as plt
import scipy.optimize as optimization

NUM_TRADING_DAYS = 252
NUM_PORTFOLIOS = 10000

stocks = ['BHARTIARTL.NS', 'RELIANCE.NS', 'ADANIPOWER.NS', 'HDFCBANK.NS', 'TATASTEEL.NS','ICICIBANK.NS','ITC.NS','TCS.NS','INFY.NS']

start_date = '2018-01-01'
end_date = '2024-01-01'


def download_data():
    stock_data = {}
    for stock in stocks:
        ticker = yf.Ticker(stock)
        stock_data[stock] = ticker.history(start=start_date, end=end_date)['Close']
    return pd.DataFrame(stock_data)


def show_data(data):
    data.plot(figsize=(10, 5))
    plt.show()

def calculate_return(data):
    log_return = np.log(data / data.shift(1))
    return log_return[1:]

def show_statistics(returns):
    print(returns.mean() * NUM_TRADING_DAYS)
    print(returns.cov() * NUM_TRADING_DAYS)


def show_mean_variance(returns, weights):
    portfolio_return = np.sum(returns.mean() * weights) * NUM_TRADING_DAYS
    portfolio_volatility = np.sqrt(np.dot(weights.T, np.dot(returns.cov() * NUM_TRADING_DAYS, weights)))
    print("Expected portfolio mean (return): ", portfolio_return)
    print("Expected portfolio volatility (standard deviation): ", portfolio_volatility)


def show_portfolios(returns, volatilities):
    plt.figure(figsize=(10, 6))
    plt.scatter(volatilities, returns, c=returns / volatilities, marker='o')
    plt.grid(True)
    plt.xlabel('Expected Volatility')
    plt.ylabel('Expected Return')
    plt.colorbar(label='Sharpe Ratio')
    plt.show()


def generate_portfolios(returns):
    portfolio_means = []
    portfolio_risks = []
    portfolio_weights = []

    for _ in range(NUM_PORTFOLIOS):
        w = np.random.random(len(stocks))
        w /= np.sum(w)
        portfolio_weights.append(w)
        portfolio_means.append(np.sum(returns.mean() * w) * NUM_TRADING_DAYS)
        portfolio_risks.append(np.sqrt(np.dot(w.T, np.dot(returns.cov() * NUM_TRADING_DAYS, w))))

    return np.array(portfolio_weights), np.array(portfolio_means), np.array(portfolio_risks)


def statistics(weights, returns):
    portfolio_return = np.sum(returns.mean() * weights) * NUM_TRADING_DAYS
    portfolio_volatility = np.sqrt(np.dot(weights.T, np.dot(returns.cov() * NUM_TRADING_DAYS, weights)))
    return np.array([portfolio_return, portfolio_volatility, portfolio_return / portfolio_volatility])


def get_min_sharp_ratio(weights,returns):
    return -statistics(weights, returns)[2]
    

def optimum_portfolio(weights, returns):
    constraints = {'type' : 'eq', 'fun' : lambda x: np.sum(x) - 1}
    bounds = tuple((0, 1) for _ in range(len(stocks)))
    optimum = optimization.minimize(fun=get_min_sharp_ratio,x0=weights[0],bounds=bounds,constraints=constraints,args=returns)
    return optimum

def print_optimal_portfolio(optimum, returns):
    print("Weights for optimal portfolio: ", optimum['x'].round(3))
    print("Expected return, volatility and Sharpe ratio: ", statistics(optimum['x'].round(3), returns))


def show_opt_portfolio(optmimum,returns,means,risks):
    plt.figure(figsize=(10, 6))
    plt.scatter(risks, means, c=means / risks, marker='o')
    plt.grid(True)
    plt.colorbar(label='Sharpe Ratio')
    plt.plot(statistics(optimum['x'], returns)[1], statistics(optimum['x'], returns)[0], markersize=10.0, marker='o', color='r')
    plt.show()



dataset = download_data()
show_data(dataset)
log_daily_returns = calculate_return(dataset)
pweights, means, risks = generate_portfolios(log_daily_returns)
show_portfolios(means, risks)
optimum = optimum_portfolio(pweights, log_daily_returns)
print_optimal_portfolio(optimum, log_daily_returns)
show_opt_portfolio(optimum,log_daily_returns,means,risks)
