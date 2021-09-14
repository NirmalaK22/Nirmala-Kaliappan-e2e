describe('youtube search in cypress',() => {
   it('loads youtube page', () => {
       //"it" is used instead of before()/beforeEach() because it runs just for the individual test case
        cy.visit('https://www.youtube.com') //it's just visit the youtube.so we dont need to login with user credentials
    })

    it('Check that if you find youtube on the page with youtube-consent, then click on it, go to If)', () => {
        cy.get('#button').then((dialog) => {
            if (dialog.find('.buttons > :nth-child(2) > .yt-simple-endpoint > #button'))
            {
            cy.title().should('eq', 'YouTube').debug() //check the title is youtube,it's just for our reference
            cy.get('.buttons > :nth-child(2) > .yt-simple-endpoint > #button').should('have.length',(1|0))
            //cy.intercept({method: 'FETCH',url: '**/google/*'}).as('myRoute')
            cy.get('.buttons > :nth-child(2) > .yt-simple-endpoint > #button').click()

            cy.get('#search-form > #container').type('The whole working-from-home thing — Apple{enter}') //type the apple video song from the searchbar

           cy.get('#search-icon-legacy').click() //press the search icon

            cy.get(':nth-child(3) > :nth-child(1) > #dismissible > .text-wrapper > #meta > #title-wrapper > .title-and-badge > #video-title > yt-formatted-string.style-scope').click() // play the video

            // cy.wait('@myRoute').should((xhr) =>
            // {expect(xhr.requestBody).to.include('').debug()})



           //  .its('response.statusCode').should('be.oneOf', ['aborted',200, 404,304])
            //cy.server()

            cy.get('#top-row > ytd-video-owner-renderer.style-scope > #upload-info > #channel-name > #container > #text-container > #text > .yt-simple-endpoint').invoke('text').should('match',/^Apple/).debug().end() //check the video uploader is indeed Apple

        }
   else {
//if suppose the youtube doesn't bother about consent because of chrome settings then run this else part
              cy.get('#search-form > #container').type('The whole working-from-home thing — Apple{enter}') //type the apple video song from the searchbar
              cy.get('#search-icon-legacy').click() //press the search icon
              cy.get(':nth-child(3) > :nth-child(1) > #dismissible > .text-wrapper > #meta > #title-wrapper > .title-and-badge > #video-title > yt-formatted-string.style-scope').click() // play the video
              cy.get('#top-row > ytd-video-owner-renderer.style-scope > #upload-info > #channel-name > #container > #text-container > #text > .yt-simple-endpoint').invoke('text').should('match',/^Apple/).debug().end() //check the video uploader is indeed Apple

           }
  })
 })
})