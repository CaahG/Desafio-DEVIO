// @ts-check
import { test, expect } from '@playwright/test';
import { fillForm } from '../helpers/forms.js';

test.describe('Testes pagina Devio [Cenarios Positivos]', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://teste-qa-devio.vercel.app/');
    await page.locator("button:has-text('Cadastrar Cliente')").click();
  });

  test('Cadastro de cliente com sucesso', async ({ page }) => {
    await fillForm(page, {
      name: 'Usuario de Teste de Cadastro'
    });
    await page.locator("button:has-text('Cadastrar')").click();

    await expect(page).toHaveURL('https://teste-qa-devio.vercel.app/')
    await page.waitForSelector('text=Usuario de Teste de Cadastro');
  });

  test('Criação e remoção de cliente com sucesso', async ({ page }) => {
    await fillForm(page, {
      name: 'Usuario de Teste de Cadastro'
    });
    await page.locator("button:has-text('Cadastrar')").click();

    await expect(page).toHaveURL('https://teste-qa-devio.vercel.app/')
    const usuario = await page.locator('text=Usuario de Teste de Cadastro');

    await usuario.waitFor({ state: 'visible' });
    await page.locator("svg[viewBox='0 0 24 24']").click();

    await usuario.waitFor({ state: 'detached' });
  });

  test('Validação de criaçao e visualição de dados de cliente', async ({ page }) => {
    await fillForm(page, {
      name: 'Usuario de Teste de Cadastro',
      email: 'testexpto@teste.com',
      phone: '987654321',
    });
    await page.locator("button:has-text('Cadastrar')").click();

    await page.locator('svg[viewBox="0 0 16 16"]').click();

    await expect(page).toHaveURL('https://teste-qa-devio.vercel.app/form?id=1')
    await page.waitForSelector('*[value="Usuario de Teste de Cadastro"]');
    await page.waitForSelector('*[value="testexpto@teste.com"]');
    await page.waitForSelector('*[value="987654321"]');
  });
});