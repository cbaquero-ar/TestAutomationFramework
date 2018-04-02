describe("Demo Blog App", function(){
    
    //Title
    it('Panel Title should contain expected label', () => {
        // browser.get('http://localhost:5000');
        // element(by.css('.navbar-brand')).getText().then(function(blogName){
        //     expect(blogName).toEqual("demoBlog");
        // });
        
        browser.get('https://angular.io');
        element(by.css('.button.hero-cta')).getText().then(function(blogName){
            expect(blogName).toEqual("GET STARTED");
        });      
    });

});