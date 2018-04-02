describe("Demo Blog App", function(){
    
    //Title
    it('Panel Title should contain expected label', () => {
        browser.get('http://localhost:5000');
        element(by.css('.navbar-brand')).getText().then(function(blogName){
            expect(blogName).toEqual("demoBlog");
        });
        
        // Working code on integration circle_ci+sauce_labs
        // browser.get('https://angular.io');
        // element(by.css('.button.hero-cta')).getText().then(function(blogName){
        //     expect(blogName).toEqual("GET STARTED");
        // });      
    });

});