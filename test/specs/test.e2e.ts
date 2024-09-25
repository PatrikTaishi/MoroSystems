import { expect } from '@wdio/globals'
import SearchPage from '../pageobjects/search.page.js'
import ResultsPage from '../pageobjects/results.page.js'
import MoroPage from '../pageobjects/moro.page.js'
import CareerPage from '../pageobjects/career.page.js'

var url: string = 'https://google.com/'
var searchText: string = 'MoroSystems'

describe('My Search application', () => {
    it('should search keyword', async () => {
        // open browser
        await SearchPage.open(url)
        await expect(SearchPage.btnAcceptCookies).toBeExisting()
        await SearchPage.acceptCookies()
        await expect(SearchPage.btnSubmit).toBeExisting()
        // go to google search bar and type MoroSystems
        await SearchPage.search(searchText)
        // display search results and click on first result                                                                                                                                                                                        
        await expect(ResultsPage.searchResults).toBeExisting()
        await expect(ResultsPage.result).toHaveText(
            expect.stringContaining(searchText))
        // go to MoroSystems website
        await ResultsPage.clickResult()
        await expect(MoroPage.mainMenu).toBeExisting()
        // visit career page 
        if (MoroPage.cookiesScript) {
            await MoroPage.acceptCookies()
        }
        await MoroPage.clickCareerTab()
        await expect(CareerPage.openPositions).toBeExisting()
    })
})

