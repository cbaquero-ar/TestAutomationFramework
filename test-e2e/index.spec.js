describe("Demo Blog App", function(){
    
    //Title
    it('Panel Title should contain expected label', () => {
        browser.get('http://localhost:3000');
        element(by.css('.navbar-brand')).getText().then(function(blogName){
            expect(blogName).toEqual("demoBlog");
        })
    });

});