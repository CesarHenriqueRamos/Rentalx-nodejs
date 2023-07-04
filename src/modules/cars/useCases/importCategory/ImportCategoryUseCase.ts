import fs from 'fs'
import { parse as csvParse } from "csv-parse"
import { ICategoryRepositores } from '../../repositores/ICategoriesRepositores'

interface IImportCategory {
  name:string;
  description:string
}

class ImportCategoryUseCase{
  constructor(private categoriesRepository:ICategoryRepositores){}
  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{
    return new Promise((resolve,reject) =>{
      const categories: IImportCategory[] = []
      const stream = fs.createReadStream(file.path)
      const parseFile = csvParse()
      stream.pipe(parseFile) 
      parseFile.on("data", async (line) => {
        const [name,description] = line
        categories.push({
          name,
          description
        })
      }).on("end", ()=>{
        fs.promises.unlink(file.path)
        resolve(categories)
      }).on("error", (err)=>{
        reject(err)
      })
    })
  }
  async execute(file: Express.Multer.File): Promise<void>{
    const categories = await this.loadCategories(file)
    categories.map( category => {
      const {name,description} = category
      const existCategory = this.categoriesRepository.findByName(name)
      if(!existCategory){
        this.categoriesRepository.create({name,description})
      }      
    })
  }
}
export {ImportCategoryUseCase}