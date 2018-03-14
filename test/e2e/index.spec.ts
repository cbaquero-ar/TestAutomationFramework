import {browser, element, by} from 'protractor';

describe("Demo Blog", function(){
    
    //Title
    it('Panel Title should contain expected label', () => {
        element(by.css('.navbar-brand')).getText().then(function(blogName){
            expect(blogName).toEqual("demoBlog");
        })
    });

});