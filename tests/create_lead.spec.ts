import { test, expect } from '@playwright/test';

test('Create Lead in Leaftaps', async ({ page }) => {

    // Navigate to the Leaftaps application
    await page.goto('https://leaftaps.com/opentaps/control/main');

    // Enter the username
    await page.locator('#username').fill('DemoSalesManager');

    // Enter the password
    await page.locator('#password').fill('crmsfa');

    // Click the Login button
    await page.locator('input[type="submit"]').click();

   // Click the CRM/SFA link
    await page.getByText('CRM/SFA').click();

    // Click the Leads link
    await page.getByText('Leads',{exact:true}).click();

    // Click the Create Lead link
    await page.getByText('Create Lead',{exact:true}).click();

    // Enter the company name
    await page.locator('#createLeadForm_companyName').fill('TestLeaf Technologies');

    // Enter the first name
    await page.locator('#createLeadForm_firstName').fill('Vineeth');

    // Enter the last name
    await page.locator('#createLeadForm_lastName').fill('Test');

    // Enter the personal title
    await page.locator('#createLeadForm_personalTitle').fill('Mr');

    // Enter the job title
    await page.locator('#createLeadForm_generalProfTitle').fill('QA Engineer');

    // Enter the annual revenue
    await page.locator('#createLeadForm_annualRevenue').fill('500000');

    // Enter the department name
    await page.locator('#createLeadForm_departmentName').fill('QA');

    // Enter the number of employees
    await page.locator('#createLeadForm_numberEmployees').fill('100');

    // Enter the ticker symbol
    await page.locator('#createLeadForm_tickerSymbol').fill('TEST');

    // Enter the primary phone number
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9876543210');

    // Enter the primary email address
    await page.locator('#createLeadForm_primaryEmail').fill('vineeth@testleaf.com');

    // Click the Create Lead button
    await page.locator('input[value="Create Lead"]').click();

    
});