describe('我的第一个测试套件', () => {
    beforeEach(() => {
      // 每个测试前执行
      cy.visit('https://www.baidu.com/')
    })
  
    it('应该显示正确的标题', () => {
      cy.title().should('include', '百度一下，你就知道')
    })
  
    it('应该能够点击按钮', () => {
      cy.get('[data-testid="submit-btn"]').click()
      cy.url().should('include', '/success')
    })
  })