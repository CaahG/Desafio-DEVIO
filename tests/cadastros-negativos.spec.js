// @ts-check
import { test, expect } from '@playwright/test';
import { fillForm } from '../helpers/forms.js';

// Todos estes testes devem falhar
test.describe('Testes pagina Devio [Cenarios Negativos]', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://teste-qa-devio.vercel.app/');
    await page.locator("button:has-text('Cadastrar Cliente')").click();
  });

  test('Cadastro sem informações obrigatórias', async ({ page }) => {
    await page.locator("button:has-text('Cadastrar')").click();

    await expect(page).toHaveURL('https://teste-qa-devio.vercel.app/form')
    await page.waitForSelector('text=Este campo é obrigatório');
  });

  test('Validação de campos de mascara de cadastro', async ({ page }) => {
    await fillForm(page);

    const campoTelefone = await page.locator('input[placeholder="(00) 00000-0000"]')
    const campoCpf = await page.locator('input[placeholder="111.111.111-22"]')

    await expect(campoCpf).toHaveValue('123.456.789-01');
    await expect(campoTelefone).toHaveValue('(12) 34567-8901');
  });

  test('Validação de criaçao de cadastros duplicados', async ({ page }) => {
    await fillForm(page);
    await page.locator("button:has-text('Cadastrar')").click();
    await page.locator("button:has-text('Cadastrar Cliente')").click();
    await fillForm(page);
    await page.locator("button:has-text('Cadastrar')").click();

    await expect(page).toHaveURL('https://teste-qa-devio.vercel.app/form')
    await page.waitForSelector('text=Este usuário já existe');
  });
});