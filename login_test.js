Feature('Login to eTalent');

Scenario('Successful login', ({ I }) => {
    I.amOnPage('https://etalente.co.za');
    I.fillField('//*[@id="mat-input-0"]', 'test.codeceptjs@test.com');
    I.fillField('//*[@id="mat-input-1"]', 'Test@!2326');
    I.click('Login');
    I.see('test.codeceptjs@test.com');
    pause();
});

Scenario('Error login', ({ I }) => {
    I.amOnPage('https://etalente.co.za');
    I.fillField('//*[@id="mat-input-0"]', 'something@totest.com');
    I.fillField('//*[@id="mat-input-1"]', '123456');
    I.click('Login');
    I.see('Invalid credentials provided');
    pause();
});

