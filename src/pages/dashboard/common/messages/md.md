div className="relative flex-1 lg:w-[calc(100%-26rem)] xl:w-[calc(100%-30rem)]">
          <Card className="lg:ml-2 bg-[#A79BE1B2]/30 w-full h-screen rounded-xl lg:h-auto lg:rounded-2xl flex flex-col mx-auto bg-white">
            <div className="flex flex-col flex-grow p-4 gap-10">
              <div className="flex flex-col flex-grow overflow-y-auto">
                {/* Replace this section with dynamic messages */}
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className={`flex w-full mt-2 gap-2 ${index % 2 === 0 ? 'max-w-xl lg:max-w-3xl' : 'ml-auto max-w-xl lg:max-w-4xl'} ${index % 2 === 0 ? '' : 'justify-end'}`}
                  >
                    <div className={`flex flex-col items-center text-center gap-1 ${index % 2 === 0 ? '' : 'ml-auto'}`}>
                      <div className="h-20 w-20 rounded-full bg-white border flex-shrink-0"></div>
                      <span className="capitalize text-base font-semibold sm:text-lg text-gray-900">
                        {index % 2 === 0 ? 'admin' : 'you'}
                      </span>
                    </div>
                    <div className={`bg-[#A79BE1B2] w-full rounded-2xl p-4 lg:py-8 lg:px-12 ${index % 2 === 0 ? '' : 'ml-2'}`}>
                      <p className="text-base sm:text-lg font-medium text-gray-900">
                        Lorem ipsum dolor sit amet consectetur. Erat nisl egestas mauris euismod nec
                        leo. Interdum eu massa amet tellus enim. Pellentesque rutrum lacus sit sit
                        lacinia quam imperdiet feugiat. Velit est rutrum tincidunt nisi amet egestas
                        egestas libero.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-none sticky bottom-0 bg-[#ACB4F470] border-2 border-[#4632A8] rounded-lg h-14 w-full gap-2 flex items-center">
                <button type="button" className="px-5">
                  <span className="sr-only">Emoji button</span>
                  <EmojiIcon />
                </button>

                <InputField
                  labelClass="hidden"
                  className="flex-1 w-full h-full bg-transparent border-none focus:ring-0 text-lg font-normal"
                  label="message input"
                  placeholder="Message"
                />

                <button
                  type="button"
                  className="rounded-lg bg-[#4632A8] h-10 w-10 flex items-center justify-center mr-2"
                >
                  <span className="sr-only">send button</span>
                  <PaperAirplaneIcon className="text-white h-6" />
                </button>
              </div>
            </div>
          </Card>
        </div>