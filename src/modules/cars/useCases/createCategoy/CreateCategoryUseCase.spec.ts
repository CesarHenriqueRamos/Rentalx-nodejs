import { AppError } from '../../../../errors/AppError';
import { CategoriesRepositoryInMemory } from '../../repositores/in-memory/CategoriesRepositoryInMemory';
import {CreateCategoryUseCase} from './CreateCategoryUseCase';

let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe('Create a category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
  });

  it('should be able to create a new category', async () => {
    const category = {
      name: 'category test',
      description: 'description test',
    };
    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);

    expect(categoryCreated).toHaveProperty('id');
  });
  it('should be able to create a new category', async () => {
    expect(async() => {
        const category = {
          name: 'category test',
          description: 'description test',
        };
        await createCategoryUseCase.execute({
          name: category.name,
          description: category.description,
        });
        await createCategoryUseCase.execute({
          name: category.name,
          description: category.description,
        });
       }).rejects.toBeInstanceOf(AppError)
  });
});