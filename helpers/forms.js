export const fillForm = async (page, data = {}) => {
    const defaults = {
        name: 'Teste',
        email: 'teste@teste.com',
        cpf: '12345678901',
        phone: '12345678901',
        cep: '95680000',
        rua: 'Rua Teste',
        complemento: 'Complemento Teste',
        numero: '123',
        bairro: 'Cidade Teste',
        cidade: 'Cidade Teste',
        estado: 'Acre',
        observacao: 'Observação Teste'
      };
    const { name, email, cpf, phone, cep, rua, numero, bairro, cidade, estado, observacao, complemento } = { ...defaults, ...data };
    
    await page.locator('input[placeholder="Nome do prestador"]').fill(name);
    await page.locator('input[placeholder="exemplo@email.com"]').fill(email);
    await page.locator('input[placeholder="111.111.111-22"]').fill(cpf);
    await page.locator('input[placeholder="(00) 00000-0000"]').fill(phone);
    await page.locator('input[placeholder="00000-000"]').fill(cep);
    await page.locator('input[placeholder="Nome da rua"]').fill(rua);
    await page.locator('input[placeholder="Complemento"]').fill(complemento);
    await page.locator('input[placeholder="000"]').fill(numero);
    await page.locator('input[placeholder="Nome do Bairro"]').fill(bairro);
    await page.locator('input[placeholder="Nome da cidade"]').fill(cidade);
  
    await page.locator('div > svg').click();
    await page.locator(`li:has-text("${estado}")`).click();
  
    await page.locator('textarea[placeholder="Observassão..."]').fill(observacao);
};
  